import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Booking } from '../model/booking';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly baseUrl='http://localhost:8080/movies';
  readonly theatreUrl='http://localhost:8080/theatres';
  readonly deleteUrl='http://localhost:8080/delete';
  readonly bookUrl='http://localhost:8083/booking';
  readonly seats='http://localhost:8083/seats';
  selectedMovie:Movie|{}={};
  bookData:any;
 // private bookUrl = 'assets/books.json';
  readonly baseURL='http://localhost:3000/books';
  readonly issueBooksURL='http://localhost:3000/books/issuedBooks';
  readonly springBaseUrl='http://localhost:8080/books';


  title:string;


  receiveTitle:EventEmitter<Movie>;
  
  isLoading = new Subject<boolean>();
 
  constructor(private http: HttpClient) { 
    this.receiveTitle=new EventEmitter<Movie>();
  }

  raiseEvent(movie:Movie){
    this.selectedMovie=movie;
    this.receiveTitle.emit(movie);
  }

  getBooksList(){
    return this.http.get(this.baseURL);
  }

  postBooks(movie:Movie){
    console.log(movie);
    if(movie.poster=='' || movie.poster==null){
      movie.poster="assets/images/book.jpg";
    }
    if(movie.location=='' || movie.location==null){
      movie.location="Gopalan mall";
    }

    return this.http.post(this.baseUrl,movie);
  }

  putBooks(movie:Movie){
    console.log(movie);
   // return this.http.put(this.baseURL+`/${movie._id}`,movie);
  }

  deleteBook(_id:string){
    return this.http.delete(this.deleteUrl+`/${_id}`);
  }

  admin(username:string,password:string){
    if(username=='admin' && password=='admin')
    return true;
    else 
    return false;
  }

  getIssuedList(){
    console.log('issued books')
    return this.http.get(this.issueBooksURL);
  }

  fetchGoogleBook(bookname){
    return this.http.get('http://www.omdbapi.com/?t='+bookname+'&apikey=2aa4f899');
  } 
 
  getMoviesList(){
    return this.http.get(this.baseUrl);
  }

  getMovie(_id:string){
    return this.http.get(this.baseUrl+`/${_id}`);
  }

  storeBooking(booking:Booking){
    localStorage.setItem('booking', JSON.stringify(booking));
  }

  storeMovie(movie:any){
    localStorage.setItem('movie', JSON.stringify(movie));
  }

  getBooking(){
    let a = JSON.parse(localStorage.getItem('booking')) || [];
    return a;
  }

  getLocation(){
    let a = JSON.parse(localStorage.getItem('movie')) || [];
    return a;
  }

  booking(booking:Booking){
    let a = JSON.parse(localStorage.getItem('user')) || [];
    booking.username=a.name;
    booking.userId=a.id;
   // localStorage.clear();
    return this.http.post(this.bookUrl,booking);
  }

  getSeats(){
    return this.http.get(this.seats);
  }


  show() {
      this.isLoading.next(true);
  }

  hide() {
      this.isLoading.next(false);
  }

  getBookings(){
    let a = JSON.parse(localStorage.getItem('user')) || [];
    let id=a.id;
    return this.http.get(this.bookUrl+`/${id}`);

  }

  getTheatres(){
    return this.http.get(this.theatreUrl);

  }

  getTheatresForMovie(name:string){
    return this.http.get(this.theatreUrl+`/${name}`);

  }
  
  


}
