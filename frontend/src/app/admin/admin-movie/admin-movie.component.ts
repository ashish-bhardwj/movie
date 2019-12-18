import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/sharedModule/model/movie';
import { MovieService } from 'src/app/sharedModule/service/movie.service';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.scss']
})
export class AdminMovieComponent implements OnInit {
  movies:Movie[];
  constructor(private movieService:MovieService) { }
  sortByKey: string='_id';
  
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
       this.filteredMovies=this.movies;
     });
   }

   onDelete(id:string){
    if(confirm('Are you sure to delete this record ?')==true){ 
      this.movieService.deleteBook(id).subscribe((res)=>{
        this.getMovies();
    //    this.resetForm(form);
      })
    }
   }

}
