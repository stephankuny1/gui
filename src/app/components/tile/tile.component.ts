import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() header = '';
  @Input() power: number | undefined = undefined;
  @Input() icon = 'pool'
  @Input() isActive = false;
  @Input() isConnected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
