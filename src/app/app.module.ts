import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DistrictPageComponent } from './pages/district-page/district-page.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SingleDistrictComponent } from './pages/single-district/single-district.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    ContacPageComponent,
    SignupPageComponent,
    DistrictPageComponent,
    NavbarComponent,
    FooterComponent,
    SingleDistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
