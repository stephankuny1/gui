import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart-device',
  templateUrl: './smart-device.component.html',
  styleUrls: ['./smart-device.component.scss']
})
export class SmartDeviceComponent implements OnInit {

  @Input() name: string = '';
  @Input() connected: number = 0;
  @Input() power: number = 0;
  @Input() type: number = 0;
  @Input() temperature: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getIcon() {
    switch (this.type) {
      case 0:
        return 'pause';
      case 1:
        return 'power_settings_new';
      case 2:
        return 'disabled_by_default';
      case 3:
        return 'solar_power';
      case 4:
        return 'solar_power';
      case 5:
        return 'link_off';
      default:
        return '';
    }
  }
}
