import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly baseUrl='http://localhost:8080/movies';
  selectedMovie:Movie|{}={};
  bookData:any;
  private bookUrl = 'assets/books.json';
  readonly baseURL='http://localhost:3000/books';
  readonly issueBooksURL='http://localhost:3000/books/issuedBooks';
  readonly springBaseUrl='http://localhost:8080/books';


  title:string;


  receiveTitle:EventEmitter<Movie>;
 
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
    return this.http.delete(this.baseURL+`/${_id}`);
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


}
