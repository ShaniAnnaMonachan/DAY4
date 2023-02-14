import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { DistrictPageComponent } from './pages/district-page/district-page.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SingleDistrictComponent } from './pages/single-district/single-district.component';

const routes: Routes = [
  {
    path:'',
    component:HomePagesComponent
  },

  {
    path:'contact',
    component:ContacPageComponent
  },

  {
    path:'signup',
    component:SignupPageComponent
  },
  
  {
    path:'district',
    component:DistrictPageComponent
  },
  {
  path:'single-district',
  component:SingleDistrictComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
