import {Component, Input, OnInit} from '@angular/core';
import {EXTENDET_DATA, PV_DATA} from "../../app.component";

@Component({
  selector: 'app-pv-overview',
  templateUrl: './pv-overview.component.html',
  styleUrls: ['./pv-overview.component.scss']
})
export class PvOverviewComponent implements OnInit {

  @Input() data: PV_DATA | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  abs(number: number) {
    return Math.abs(number);
  }


  getBoilerTemp() {

    const temp = this.data?.devices.filter(x => x.currentWaterTemp !== undefined).pop();

    if (temp) {

      console.log('temp:', temp.currentWaterTemp);
      return temp.currentWaterTemp
    } else return 0
  }
}
