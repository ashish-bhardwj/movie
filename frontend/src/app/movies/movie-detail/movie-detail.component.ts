import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/sharedModule/model/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/sharedModule/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle = 'Movie Title';
  errorMessage = '';
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getMovie(id);
    }
  }

  getMovie(id:string){
    this.movieService.getMovie(id).subscribe((res)=>{
      this.movie=res as Movie;
      console.log(this.movie);
    });
  }




  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
