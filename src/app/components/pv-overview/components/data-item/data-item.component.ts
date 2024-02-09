import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.scss']
})
export class DataItemComponent implements OnInit {

  @Input() description: string = '';
  @Input() value: number = 0;
  @Input() unit: string = 'W';

  @Input() cssClass: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
