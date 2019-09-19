import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../sharedModule/material/material.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { ChildComponent } from './child/child.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PipeModule } from '../sharedModule/pipe/pipe.module';
import { MoviesModule } from '../movies/movies.module';

@NgModule({
  declarations: [AdminComponent, AddMovieComponent, AdminMovieComponent, ChildComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModule,
    PipeModule,
    MoviesModule
  ]
})
export class AdminModule { }
