package com.example.movie.controller;

import java.util.List;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie.model.Booking;
import com.example.movie.model.Movie;
import com.example.movie.model.Theatre;
import com.example.movie.repository.BookingRepository;
import com.example.movie.repository.MovieRepository;
import com.example.movie.repository.TheatreRepository;
import com.example.movie.service.MovieService;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
	
	private static final Logger logger = LoggerFactory.getLogger(MovieController.class);
	
	
	@Autowired
	MovieRepository movieRepository;
	
	@Autowired
	MovieService movieService;
	
	@Autowired
	TheatreRepository theatreRepository;
	
	@Autowired
	BookingRepository bookingRepository;
	
	@GetMapping("/movies")
	public ResponseEntity<List<Movie>> getAllMovies() {
		List<Movie> list= movieRepository.findAll();
		if(list.size()==0)
			return new ResponseEntity<List<Movie>>(list, HttpStatus.NOT_FOUND);
		else
		return new ResponseEntity<List<Movie>>(list, HttpStatus.OK);
	}
	 
	@PostMapping("/movies")
	  public void addBook( @RequestBody Movie movie) {
		System.out.println(movie.toString());
		movie.set_id(ObjectId.get());
		movieRepository.save(movie);     
	  }
	
	@GetMapping("/movies/{id}")
	  public ResponseEntity<Movie> getBookById(@PathVariable("id") String id) {
		if(!ObjectId.isValid(String.valueOf(id))) {
			return new ResponseEntity<Movie>( HttpStatus.BAD_REQUEST);
		}
		else
		{
			Movie movie=movieRepository.findBy_id(id);
			if(movie==null)
				return new ResponseEntity<Movie>(movie, HttpStatus.NOT_FOUND);
			else
		     return new ResponseEntity<Movie>(movie, HttpStatus.OK);
		}
		
	  }
	
	@DeleteMapping("/delete/{id}")
	  public void deleteBook( @PathVariable("id") ObjectId id) {
		movieRepository.deleteById(id);    
	  }
	
	@PostMapping("/booking")
	  public boolean booking( @RequestBody Booking booking) {
		Booking success=null;
		success=bookingRepository.save(booking);   
		if(success.getMovieTitle()==null || success.getMovieTitle()==" ")
			return false;
		else 
			return true;
			
	  }
	
	
	@GetMapping("/search/title/{param}")
	public Movie searchByTitle(@PathVariable("param") String param) {
		logger.info("inside Movie Controller search ");
		Movie movie=movieRepository.findByTitle(param);
		 return movie;		
	}
	
	@GetMapping("/search/rating/{param}")
	public List<Movie> searchByRating(@PathVariable("param") String param) {
		 return movieRepository.findByRatingGreaterThan(param);	
	}
	

	

}
