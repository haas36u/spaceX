import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { MomentModule } from 'ngx-moment';

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
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    MomentModule
  ],
  declarations: []
})
export class SharedModule { }
