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

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PipeModule,
    FormsModule,
    TooltipModule.forRoot(),
    NgbModule
  ]
})
export class MoviesModule { }
