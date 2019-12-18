import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/sharedModule/model/theatre';
import { MovieService } from 'src/app/sharedModule/service/movie.service';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.css']
})
export class TheatresComponent implements OnInit {
  theatres:Theatre[]|undefined;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.getTheatres();
  }

  getTheatres(){
    this.movieService.getTheatres().subscribe((data)=>{
      this.theatres=data as Theatre[];
      console.log(this.theatres);
    });
  }

}
