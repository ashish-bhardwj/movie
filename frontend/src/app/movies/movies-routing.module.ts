import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
 // {path:'',redirectTo:'/movies'},
  {path:'',component:MoviesComponent},
  {path: 'movie/:id',component:MovieDetailComponent},
//  {path:'book/:id',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
