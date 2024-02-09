import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EXTENDET_DATA, PV_DATA} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() viewMode: boolean = false;
  @Input() pvData: PV_DATA | undefined;
  @Output() viewChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
