import { Component, OnInit } from '@angular/core';
import { MovieService } from '../sharedModule/service/movie.service';
import { Movie } from '../sharedModule/model/movie';
import { Booking } from '../sharedModule/model/booking';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  creditForm: FormGroup;
  movie:Movie|undefined;
  booking:Booking|undefined;
  title:string;
  pageTitle="Payment";
  defaultQuestion:String='2';
  cardOption: boolean=true;

  constructor( private formBuilder: FormBuilder,
    private movieService:MovieService,
    private router:Router,
    private route:ActivatedRoute) {
      this.creditForm = this.formBuilder.group({
        'cardNumber': ['',Validators.required],
        'name': ['',Validators.required],
        'expiry': ['',[Validators.required]],
        'cvv': ['', [Validators.required]],
     
      });

     }

  ngOnInit() {
    this.booking=this.movieService.getBooking();
  //this.movieService.receiveTitle.subscribe((param:Movie)=>{
  //this.movie=param;
  //this.title=this.movie.title;
  //console.log(this.movie);
//});
  }

  selectOption(event){
    this.cardOption=!this.cardOption;
  }

  payment(){
    console.log(this.creditForm.value.name);
    if(this.creditForm.value.name=="ashish") {
      this.movieService.booking(this.booking).subscribe((data)=>{
        if(data==true){
          this.router.navigate(['success'],{relativeTo: this.route});
        }
        else{
          this.router.navigate(['/payment']);
        }    
      });
    }
   
  }

  onBack(){ 
    if(confirm('All your information will be lost..\n Are you sure you want to go back?')==true){ 
      this.router.navigate(['/movies']);
  }
}

resetForm(){
  this.creditForm.reset();
}

}
