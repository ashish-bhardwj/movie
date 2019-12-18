package com.example.movie.service;

import java.util.List;

import org.bson.types.ObjectId;
import com.example.movie.model.Booking;
import com.example.movie.model.Movie;
import com.example.movie.model.Theatre;

public interface MovieService {
	

	public List<Movie> getAllMovies();
	
	public void addBook(Movie movie) ;
	
	public Movie getBookById(String id) ;
	
	public void deleteBook( ObjectId id) ;
	
	public boolean booking(Booking booking) ;
	
	public Movie searchByTitle(String param);
	
	public List<Movie> searchByRating( String param) ;
	
	public List<Theatre> getTheatres() ;
	
	public Theatre addTheatres(Theatre theatre) ;
	
	public List<Theatre> getTheatresForMovie(String name);

}
