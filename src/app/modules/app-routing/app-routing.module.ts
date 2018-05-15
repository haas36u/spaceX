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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rockets', component: RocketListComponent },
  { path: 'rockets/:id', component: RocketDetailsComponent },
  { path: 'capsules', component: CapsuleListComponent },
  { path: 'capsules/:id', component: CapsuleDetailsComponent },
  { path: 'about', component: CompanyComponent }
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
