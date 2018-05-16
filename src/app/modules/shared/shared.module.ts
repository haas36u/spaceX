import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatTabsModule
  ],
  declarations: []
})
export class SharedModule { }
