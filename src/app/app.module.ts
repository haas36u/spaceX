import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { CompanyComponent } from './components/company/company.component';
import { HomeComponent } from './components/home/home.component';
import { RocketDetailsComponent } from './components/rocket/rocket-details/rocket-details.component';
import { RocketListComponent } from './components/rocket/rocket-list/rocket-list.component';
import { RocketThumbComponent } from './components/rocket/rocket-thumb/rocket-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    RocketDetailsComponent,
    RocketListComponent,
    RocketThumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
