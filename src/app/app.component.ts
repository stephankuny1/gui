import { Component } from '@angular/core';
import {DataService} from "./components/data.service";
import {interval} from "rxjs";

export interface INFO_DATA {
  _id: string,
  tag: any
  device_type: string,
  data: any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PVA MONITORING';
  numbers = interval(1000);

  n = this.numbers.subscribe(x => this.getData())
  data: any;
  constructor(private dataService: DataService) {

   // this.getData()
  }

  getData() {
    this.dataService.getPvaData().subscribe((data) => {
      console.log('data', data);
      this.data = data;
    });
  }


  getName(infoData: INFO_DATA[], device: any) {
    return infoData.filter(x=> x._id === device._id).pop()!.tag.name;
  }

  getDeviceInfo(infoData: INFO_DATA[], device: any) {
    return infoData.filter(x=> x._id === device._id).pop();
  }

  getSmartPlugType(infoData: INFO_DATA[], device: any) {
    return infoData.filter(x=> x._id === device._id).pop()!.data!.smartPlugChargingType!;
  }
}
