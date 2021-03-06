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
import { CapsuleDetailsComponent } from './components/capsule/capsule-details/capsule-details.component';
import { CapsuleListComponent } from './components/capsule/capsule-list/capsule-list.component';
import { CapsuleThumbComponent } from './components/capsule/capsule-thumb/capsule-thumb.component';
import { LaunchpadDetailsComponent } from './components/launchpad/launchpad-details/launchpad-details.component';
import { LaunchpadListComponent } from './components/launchpad/launchpad-list/launchpad-list.component';
import { LaunchpadThumbComponent } from './components/launchpad/launchpad-thumb/launchpad-thumb.component';
import { LaunchListComponent } from './components/launch/launch-list/launch-list.component';
import { LaunchThumbComponent } from './components/launch/launch-thumb/launch-thumb.component';
import { LaunchFilterComponent } from './components/launch/launch-filter/launch-filter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {NgHttpLoaderModule} from 'ng-http-loader/ng-http-loader.module';
import { GmapComponent } from './components/gmap/gmap.component';
import { CoreThumbComponent } from './components/core/core-thumb/core-thumb.component';
import { CoreListComponent } from './components/core/core-list/core-list.component';
import { CoreDetailsComponent } from './components/core/core-details/core-details.component';
import { CapsuleFilterComponent } from './components/capsule/capsule-filter/capsule-filter.component';
import { CoreFilterComponent } from './components/core/core-filter/core-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    RocketDetailsComponent,
    RocketListComponent,
    RocketThumbComponent,
    CapsuleDetailsComponent,
    CapsuleListComponent,
    CapsuleThumbComponent,
    LaunchpadDetailsComponent,
    LaunchpadListComponent,
    LaunchpadThumbComponent,
    LaunchListComponent,
    LaunchThumbComponent,
    LaunchFilterComponent,
    NotFoundComponent,
    GmapComponent,
    CoreThumbComponent,
    CoreListComponent,
    CoreDetailsComponent,
    CapsuleFilterComponent,
    CoreFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
