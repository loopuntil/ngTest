import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './counter.component/counter.component.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoardComponent } from './board/board.component';
import { CarsComponent } from './cars/cars.component';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent,
    BoardComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
