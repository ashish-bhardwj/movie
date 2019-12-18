import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/sharedModule/model/theatre';
import { MovieService } from 'src/app/sharedModule/service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/sharedModule/model/movie';

@Component({
  selector: 'app-movie-theatre',
  templateUrl: './movie-theatre.component.html',
  styleUrls: ['./movie-theatre.component.css']
})
export class MovieTheatreComponent implements OnInit {
  theatres:Theatre[];
  name:string;
  movie:Movie|undefined;

  constructor(private movieService:MovieService,
    private route:ActivatedRoute,
    private router:Router) { }

    _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTheatres = this.listFilter ? this.performFilter(this.listFilter) : this.theatres;
  }

  filteredTheatres: Theatre[] = [];

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getMovie(id);
    //  this.getTheatreForMovie();
    }
    
  }

  performFilter(filterBy: string): Theatre[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.theatres.filter((theatre: Theatre) =>
      theatre.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getMovie(id:string){
    this.movieService.getMovie(id).subscribe((res)=>{
      this.movie=res as Movie;
      this.getTheatreForMovie();
    });
  }

  getTheatreForMovie(){
    this.movieService.getTheatresForMovie(this.movie.title).subscribe((data)=>{
      this.theatres=data as Theatre[];
      this.filteredTheatres=this.theatres;
    });
  }

  book(theatre:Theatre,time:string){
    let movie:any={
      title:this.movie.title,
      location:theatre.name,
      time:time
    };
    this.movieService.storeMovie(movie);
    this.router.navigate(['/book']);
  }

  goBack(){
    this.router.navigate(["/movies"]);
  }


}
