import {Component, Input, OnInit} from '@angular/core';
import {EXTENDET_DATA, INFO_DATA} from "../../app.component";

@Component({
  selector: 'app-tile-page',
  templateUrl: './tile-page.component.html',
  styleUrls: ['./tile-page.component.scss']
})
export class TilePageComponent implements OnInit {

  //@Input() data: any | undefined;
  @Input() deviceData: EXTENDET_DATA[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getName(infoData: INFO_DATA[], device: any) {
    return infoData.filter(x=> x._id === device._id).pop()!.tag.name;
  }

  getDeviceInfo(infoData: INFO_DATA[], device: any) {
    return infoData.filter(x=> x._id === device._id).pop();
  }
  //
  // getIcon(name: string) {
  //
  //   if (name==='Pool Umwälzpumpe') return 'pool'
  //   if (name==='Poolheizung') return 'waves'
  //   if (name==='GWM') return 'local_laundry_service'
  //   if (name==='Warmwasser') return 'gas_meter'
  //   if (name==='Heizung WZ') return 'fireplace'
  //   if (name==='Heizung Wohnzimmer') return 'thermostat'
  //   if (name==='Pool Licht') return 'wb_iridescent'
  //   if (name==='AC') return 'ac_unit'
  //
  //   return 'home'
  // }

  log(o:any){console.log(o);}

}
