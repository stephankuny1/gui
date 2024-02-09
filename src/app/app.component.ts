import {Component, ViewEncapsulation} from '@angular/core';
import {DataService} from "./components/data.service";
import {interval} from "rxjs";

export interface EXTENDET_DATA {
  _id: string,
  switchState: number;
  activeDevice: number;
  name: string;
  priority: number;
  signal: string;
  currentPower: number;
  currentWaterTemp: number;
  smartPlugChargingType: number;
  notes: string;

}

export interface PV_DATA {

  devices: EXTENDET_DATA[],
  currentpowerconsumption: number,
  currentGridPower: number,
  currentPvGeneration: number,
  availablePower: number,
}
/*
id: "61f28bf4f2977d7af944c7db", priority: 2, device_type: "device", signal: "connected", tag: {_id: "6322d11d03e767218fce9c2f", name: "GWM"}, …}
4 {_id: "61ab481222c73d1175784444", priority: 3, device_type: "device", signal: "connected", tag: {_id: "61ab656e22c73d1175784446", name: "Pool Umwälzpumpe"}, …}
5 {_id: "61ab43c63012a01161609e3e", priority: 4, device_type: "device", signal: "connected"

 */
export interface INFO_DATA {
  _id: string,
  tag: any
  device_type: string,
  data: any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  viewMode: boolean = false;
  title = 'PVA MONITORING';
  numbers = interval(1000);

  n = this.numbers.subscribe(x => this.getData())

  pvData: PV_DATA | undefined = undefined;

  constructor(private dataService: DataService) {
    this.getData()
  }

  setData(data: any) {
    const devices: EXTENDET_DATA[] = [];
    data.gateway.Devices.forEach((device: any) => {

      const xyz = data.infodata.some((x: INFO_DATA) => x._id === device._id && x.device_type==='device');
      if (xyz) {
        const infoData = data.infodata.filter((x: INFO_DATA) => x._id === device._id).pop()!;
        devices.push(
          {
            _id: device._id,
            switchState: device.switchState,
            activeDevice: device.activeDevice,
            name: infoData.tag.name,
            priority: infoData.priority,
            signal: device.signal,
            currentPower: device.currentPower ?? 0,
            currentWaterTemp: device.currentWaterTemp,
            notes: infoData.data.notes,
            smartPlugChargingType: (infoData.data.smartPlugChargingType + infoData.data.waterHeaterMode) ?? 0
          }
        );
      }
    });

    this.pvData =
    {
      devices: devices,
      currentpowerconsumption: data.gateway.currentpowerconsumption,
      currentGridPower: data.gateway.currentGridPower,
      currentPvGeneration: data.gateway.currentPvGeneration,
      availablePower:
        Math.max(0, 0 - data.gateway.currentGridPower +
        devices.filter(x => x.smartPlugChargingType === 3).map(x => x.currentPower).reduce((a, b) => a + b, 0))
    }
    return devices;
  }


  getData() {
    try {
      this.dataService.getPvaData().subscribe((data) => {
        console.log('fetch data', data);
        this.setData(data);
      },
      (error) => {
        console.log('error occured', error);
        this.pvData = undefined;
      }
      );

    } catch (e) {
      console.log('ERROR');
    }
  }
}
