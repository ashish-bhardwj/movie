import { Component, OnInit } from '@angular/core';
import { Movie } from '../sharedModule/model/movie';
import { MovieService } from '../sharedModule/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movies:Movie[];
nowMovies:Movie[];
nextMovies:Movie[];
  constructor(private movieService:MovieService,
    private router:Router,
    private route:ActivatedRoute) { }
  sortByKey: string='_id';
  showing:boolean=true;
  
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  filteredMovies: Movie[] = [];

  ngOnInit(): void {
    this.getMovies();
   }

   performFilter(filterBy: string): Movie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: Movie) =>
      movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
 
   getMovies(){
     this.movieService.getMoviesList().subscribe((res)=>{
       this.movies=res as Movie[];
     //  this.filteredMovies=this.movies;
       this.nextChange(this.movies);
       this.nowShowing(this.movies);
     });
   }

   
   nextChange(movies:Movie[]){
     this.nextMovies=this.movies.filter((movie: Movie) =>
     movie.showing==false);
     this.showing=false;
  }

  nowShowing(movies:Movie[]){
    this.nowMovies=this.movies.filter((movie: Movie) =>
    movie.showing==true);
    this.showing=true;
  }

  notify(){
    alert('You will be notified once its released !!');
  }

  logout(){
    this.router.navigate(['']);
    localStorage.clear();
  }

  book(movie:Movie){
    this.router.navigate(['theatre',movie._id],{relativeTo:this.route});
  }
}
