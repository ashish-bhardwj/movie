import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BookingComponent } from '../booking/booking.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { TheatresComponent } from './theatres/theatres.component';
import { MovieTheatreComponent } from './movie-theatre/movie-theatre.component';

const routes: Routes = [
 // {path:'',redirectTo:'/movies'},
  {path:'',component:MoviesComponent},
  {path: 'movie/:id',component:MovieDetailComponent},
 //  {path:'book/:id',component:BookingComponent},
   {path:'bookings',component:MyBookingComponent},
   {path:'theatres',component:TheatresComponent},
   {path:'theatre/:id',component:MovieTheatreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
