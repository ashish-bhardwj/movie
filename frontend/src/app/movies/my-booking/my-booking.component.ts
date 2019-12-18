import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/sharedModule/model/booking';
import { MovieService } from 'src/app/sharedModule/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  booking:Booking[];

  constructor(
    private movieService:MovieService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getBooking();
  }

  getBooking(){
     this.movieService.getBookings().subscribe((data)=>{
       this.booking=data as Booking[];
     });
  }

  goBack(){
    this.router.navigate(['/movies']);
  }

}
