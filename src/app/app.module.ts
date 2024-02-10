import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartDeviceComponent } from './components/smart-device/smart-device.component';
import { TileComponent } from './components/tile/tile.component';
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import { HeaderComponent } from './components/header/header.component';
import { PvOverviewComponent } from './components/pv-overview/pv-overview.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { TilePageComponent } from './components/tile-page/tile-page.component';
import { TablePageComponent } from './components/table-page/table-page.component';
import { DataItemComponent } from './components/pv-overview/components/data-item/data-item.component';
import {TileDetailsComponent} from "./components/tile/components/tile-details/tile-details.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    SmartDeviceComponent,
    TileComponent,
    HeaderComponent,
    PvOverviewComponent,
    ErrorPageComponent,
    TilePageComponent,
    TablePageComponent,
    DataItemComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule,
        TileDetailsComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
