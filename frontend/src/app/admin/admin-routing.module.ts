import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { MovieDetailComponent } from '../movies/movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'',component:AdminComponent,
children:[
 // {path:'',component:HomeComponent},
  {path:'',component:AdminMovieComponent},
  {path:'addMovies',component:AddMovieComponent},
  {path: 'movie/:id',component:MovieDetailComponent},
]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
