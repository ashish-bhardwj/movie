import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from '../sharedModule/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipeModule } from '../sharedModule/pipe/pipe.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TooltipModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from '../sharedModule/loader/loader.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { TheatresComponent } from './theatres/theatres.component';
import { MovieTheatreComponent } from './movie-theatre/movie-theatre.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent,LoaderComponent, MyBookingComponent, TheatresComponent, MovieTheatreComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PipeModule,
    FormsModule,
    TooltipModule.forRoot(),
    NgbModule,
    MaterialModule,
  ]
})
export class MoviesModule { }
