import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/sharedModule/model/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/sharedModule/service/movie.service';
import { Booking } from '../sharedModule/model/booking';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  implements OnInit  {
  movie:any|undefined;
  title:string;
  location:string;
  time:string;
  movieTitle:string = "Captain America: The Winter Soldier";
  screen: string = "LUXE CINEMAS";
 // time: string = "FRI, 6:45PM"

  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved: string[] = [];
  reserved2: string[]=[];
  selected: string[] = [];

  ticketPrice: number = 120;
  convFee: number = 30;
  totalPrice: number = 0;
  currency: string = "Rs";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovieDetails();
    this.getSeats();
  }

  getMovieDetails(){
    this.movie=this.movieService.getLocation();
    this.title=this.movie.title;
    this.location=this.movie.location;
    this.time=this.movie.time;
  }

  //return status of each seat
  getStatus = function(seatPos: string) {
      if(this.reserved2.indexOf(seatPos) !== -1) {
          return 'reserved';
      } else if(this.selected.indexOf(seatPos) !== -1) {
          return 'selected';
      }
  }
  //clear handler
  clearSelected = function() {
      this.selected = [];
  }
  //click handler
  seatClicked = function(seatPos: string) {
      var index = this.selected.indexOf(seatPos);
      
      if(index !== -1) {
          // seat already selected, remove
          this.selected.splice(index, 1)
      } else {
          //push to selected array only if it is not reserved
          if(this.reserved2.indexOf(seatPos) === -1)
              this.selected.push(seatPos);
      }
  }
  //Buy button handler
  showSelected = function() {
      if(this.selected.length > 0) {
          alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
      } else {
          alert("No seats selected!");
      }
  }

  cancel(){
    this.selected=[];
   // this.router.navigate(['/movies']);
  }

  processBooking(){
 //   this.movieService.raiseEvent(this.movie);
   let booking:Booking={
     _id:null,
     userId:null,
     username:null,
     movieTitle:this.movie.title,
     location:this.movie.location,
     time:this.movie.time,
     ticketCount: this.selected.length,
     seats:this.selected,
     price:this.ticketPrice * this.selected.length + this.convFee
   };
 this.movieService.storeBooking(booking);
    console.log(this.movie.title);
    this.router.navigate(['payment']);
  }


  getSeats(){

    this.movieService.getSeats().subscribe((data)=>{
        this.reserved2=data as string[];
        console.log(this.reserved2);
    });

  }

  goBack(){
    this.router.navigate(['/movies']);
  }
}
