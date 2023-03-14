import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { MovieListItemComponent } from './app/movie-list-item/movie-list-item.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'movie/:id', component: MovieListItemComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
