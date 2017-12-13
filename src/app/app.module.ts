import { SendService } from './send.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './counter.component/counter.component.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoardComponent } from './board/board.component';
import { CarsComponent } from './cars/cars.component';
import { NavigatePageComponent } from './navigate-page/navigate-page.component';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent,
    BoardComponent,
    CarsComponent,
    NavigatePageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule
  ],
  providers: [SendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
