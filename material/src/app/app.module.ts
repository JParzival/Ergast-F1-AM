import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './material/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';

import { ClasificacionComponent } from './componentes/clasificacion/clasificacion.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { CircuitosComponent } from './componentes/circuitos/circuitos.component';
import { HomeComponent } from './componentes/home/home.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: 
  [
    AppComponent,
    MyNavComponent,
    ClasificacionComponent,
    CalendarioComponent,
    CircuitosComponent,
    HomeComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule, 
    HttpClientModule,
    MaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
