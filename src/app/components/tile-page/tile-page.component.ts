import {Component, Input, OnInit} from '@angular/core';
import {INFO_DATA} from "../../app.component";

@Component({
  selector: 'app-tile-page',
  templateUrl: './tile-page.component.html',
  styleUrls: ['./tile-page.component.scss']
})
export class TilePageComponent implements OnInit {

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

}
