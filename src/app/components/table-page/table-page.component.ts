import {Component, Input, OnInit} from '@angular/core';
import {INFO_DATA} from "../../app.component";

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  @Input() data: any | undefined;

  constructor() { }

  ngOnInit(): void {
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
