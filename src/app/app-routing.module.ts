import { NavigatePageComponent } from './navigate-page/navigate-page.component';
import { CarsComponent } from './cars/cars.component';
import { BoardComponent } from './board/board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'board', component: BoardComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'np/:value', component: NavigatePageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
