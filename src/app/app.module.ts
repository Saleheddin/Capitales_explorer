import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CapitalesComponent } from './capitales/capitales.component';
import { HomeComponent } from './home/home.component';
import { CapitalesService } from './capitales.service';
import { EditcapitalComponent } from './editcapital/editcapital.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CapitalesComponent,
    HomeComponent,
    EditcapitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'capitales', component: CapitalesComponent}
    ]),
    GoogleMapsModule,
  ],
  providers: [
    CapitalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
