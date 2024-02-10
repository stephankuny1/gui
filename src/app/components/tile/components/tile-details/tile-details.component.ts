import {Component, Inject, Input} from '@angular/core';
import {EXTENDET_DATA} from "../../../../app.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-tile-details',
  standalone: true,
  imports: [],
  templateUrl: './tile-details.component.html',
  styleUrl: './tile-details.component.scss'
})
export class TileDetailsComponent {

  @Input() device: EXTENDET_DATA | undefined = undefined;

  constructor(public dialogRef: MatDialogRef<TileDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}
