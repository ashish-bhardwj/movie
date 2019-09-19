package com.example.movie.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie.model.Movie;
import com.example.movie.model.User;
import com.example.movie.repository.MovieRepository;
import com.example.movie.repository.UserRepository;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
	
	
	@Autowired
	MovieRepository movieRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/movies")
	public List<Movie> getAllMovies() {
		List<Movie> list= movieRepository.findAll();
		return list;
	}
	 
	@PostMapping("/movies")
	  public void addBook( @RequestBody Movie movie) {
		System.out.println(movie.toString());
		movie.set_id(ObjectId.get());
		movieRepository.save(movie);     
	  }
	
	@GetMapping("/movies/{id}")
	  public Movie getBookById(@PathVariable("id") ObjectId id) {
		System.out.println(id);
	    return movieRepository.findBy_id(id);
	  }
	
	@PostMapping("/signin")
	public User login(@RequestBody User user) {
		User user2=new User();
		try {
			user2= userRepository.findByEmail(user.getEmail());
			if(user.getEmail().equals(user2.getEmail()) && user.getPassword().equals(user2.getPassword()))
				return user2;
		}
		catch (NullPointerException e) {
			e.getMessage();
			// TODO: handle exception
			System.out.println("catch");
		//	return user;
			
		}
		System.out.println("finally");
		user2.setEmail(user.getEmail());
		return user2;	
	}
	
	@PostMapping("/signup")
	public int signup(@RequestBody User user) {
		User usr=userRepository.save(user);
		if(usr!=null)
			return 1;
		else
			return 0;
			
	}

}
