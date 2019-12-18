import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.movieService.isLoading;
  
  constructor(private movieService: MovieService){}

  ngOnInit() {
  }

}
