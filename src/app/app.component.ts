import { Component } from '@angular/core';
import {DataService} from "./components/data.service";

export interface INFO_DATA {
  _id: string,
  tag: any
  data: any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gui';

  data: any;
  constructor(dataService: DataService) {
    dataService.getPvaData().subscribe((data) => {
      console.log('data', data);
      this.data = data;
    });
  }



  getName(infoData: INFO_DATA[], device: any) {
    return infoData.filter(x=> x._id === device._id).pop()!.tag.name;
  }

  getSmartPlugType(infoData: INFO_DATA[], device: any) {
    return infoData.filter(x=> x._id === device._id).pop()!.data!.smartPlugChargingType!;
  }
}
