import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pv-overview',
  templateUrl: './pv-overview.component.html',
  styleUrls: ['./pv-overview.component.scss']
})
export class PvOverviewComponent implements OnInit {

  @Input() data: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  abs(number: number) {
    return Math.abs(number);
  }
}
