import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/sharedModule/service/movie.service';
import { Movie } from 'src/app/sharedModule/model/movie';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  submitted = false;
  text='Signup to continue';
  defaultQuestion:String='2';
  bookChange: boolean=true;

  APIbooks:any=0;
  title:any;
  actors:any;
  books:any;
  isBookPresent:boolean;
  googleBook:any={};
  constructor(
    private formBuilder: FormBuilder,
              private router: Router,
              private movieService:MovieService) { 
      this.movieForm = this.formBuilder.group({
        'title': ['',Validators.required],
        'description': ['',Validators.required],
        'rating': ['',[Validators.required]],
        'language': ['', [Validators.required]],
        'genre': ['', [Validators.required]],
        'poster': ['', [Validators.required]],
        'releaseDate': ['', [Validators.required]],
        'showing':['',[Validators.required]],
        'location':['',[Validators.required]]
      });

  }

  ngOnInit() {
  }

  selectOption(event){
    this.bookChange=!this.bookChange;
  }

  get f() { return this.movieForm.controls; }

  resetForm(bookform:FormGroup){
    if(bookform)
    bookform.reset();
  }

  search(title:String){
    console.log("title:"+title);
   if(title==="")
     return 
   this.movieService.fetchGoogleBook(title)
   .subscribe(
     (data:any) => {
      console.log("data:"+data.Title);
       this.APIbooks = 1;
       this.title=data.Title;
       this.actors=data.Actors;
       this.books=data;
       this.isBookPresent= true },
     error => { 
       alert('Unable to find movies...Enter details manually');     
     }
   );
   
 }

 show(data:any){
   this.movieService.bookData=data;
   console.log("title:"+this.movieService.bookData.Title);
   var today = new Date();
   var release:string=this.movieService.bookData.Released;
   var ary:string[]=release.split(" ");
   var year1=+ary[2];
   var year2 =today.getFullYear();
   console.log('year1'+year1);
   console.log('year2:'+year2);
     let movie:Movie={
       _id:null,
     title:this.movieService.bookData.Title,
     description:this.movieService.bookData.Plot,
     rating:this.movieService.bookData.imdbRating,
     language:this.movieService.bookData.Language,
     genre:this.movieService.bookData.Genre,
     poster:this.movieService.bookData.Poster,
     location:"",
     timings:[""],
     actors:this.movieService.bookData.Actors,
     releaseDate:this.movieService.bookData.Released,
     
     showing:null
   }
   if(year1>year2){
     movie.showing=false;
   }
   else {
    movie.showing=true;
  }
   console.log(this.movieService.bookData.Title);
   this.movieService.postBooks(movie).subscribe((res)=>{
     this.resetForm(this.movieForm);
  //   this.toastr.successToastr('Book added successfully.', 'Success!');
   });
  
   
 }

 onSubmit(){
  this.submitted = true;
  if (this.movieForm.invalid) {
  // add toast msg saying....fill all the fields
    return;
}
   console.log(this.movieForm.controls.title.value);
     this.movieService.postBooks(this.movieForm.value).subscribe((res)=>{
       this.resetForm(this.movieForm);
     });
  }

}
