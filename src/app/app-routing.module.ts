import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  // Default Route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   // Standard Route
  { path: 'home', component: HomeComponent },
  { path: 'setting', component: SettingsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
