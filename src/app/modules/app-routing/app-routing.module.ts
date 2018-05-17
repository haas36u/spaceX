import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../components/home/home.component';
import { CompanyComponent } from '../../components/company/company.component';
import { RocketListComponent } from '../../components/rocket/rocket-list/rocket-list.component';
import { RocketDetailsComponent } from '../../components/rocket/rocket-details/rocket-details.component';
import { CapsuleListComponent } from '../../components/capsule/capsule-list/capsule-list.component';
import { CapsuleDetailsComponent } from '../../components/capsule/capsule-details/capsule-details.component';
import { LaunchpadListComponent } from '../../components/launchpad/launchpad-list/launchpad-list.component';
import { LaunchpadDetailsComponent } from '../../components/launchpad/launchpad-details/launchpad-details.component';
import { LaunchListComponent } from '../../components/launch/launch-list/launch-list.component';
import { CoreListComponent } from '../../components/core/core-list/core-list.component';
import { CoreDetailsComponent } from '../../components/core/core-details/core-details.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rockets', component: RocketListComponent },
  { path: 'rockets/:id', component: RocketDetailsComponent },
  { path: 'capsules', component: CapsuleListComponent },
  { path: 'capsules/:id', component: CapsuleDetailsComponent },
  { path: 'launchpads', component: LaunchpadListComponent },
  { path: 'launchpads/:id', component: LaunchpadDetailsComponent },
  { path: 'launches', component: LaunchListComponent },
  { path: 'cores', component: CoreListComponent },
  { path: 'cores/:id', component: CoreDetailsComponent },
  { path: 'about', component: CompanyComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
