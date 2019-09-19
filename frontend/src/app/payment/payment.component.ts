import { Component, OnInit } from '@angular/core';
import { MovieService } from '../sharedModule/service/movie.service';
import { Movie } from '../sharedModule/model/movie';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  movie:Movie|undefined;
  title:string;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  this.movieService.receiveTitle.subscribe((param:Movie)=>{
  this.movie=param;
  this.title=this.movie.title;
  console.log(this.movie);
});
  }

}
