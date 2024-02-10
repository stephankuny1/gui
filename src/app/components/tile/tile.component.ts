import {Component, Input, OnInit} from '@angular/core';
import {EXTENDET_DATA} from "../../app.component";
import {MatDialog} from "@angular/material/dialog";
import {TileDetailsComponent} from "./components/tile-details/tile-details.component";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
/*
  @Input() header = '';
  @Input() power: number | undefined = undefined;
  @Input() icon = 'pool'
  @Input() isActive = false;
  @Input() isConnected = false;
*/
  @Input() device: EXTENDET_DATA | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  isConnected() {
    return this.device?.signal === 'connected'
  }

  onDetails() {
    // console.log('details');
    //
    // const dialgRef = this.matDialog.open(TileDetailsComponent
    //
    // , {data: {name: this.device!.name }});
  }
}
