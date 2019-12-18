package com.example.movie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.movie.model.Theatre;
import com.example.movie.repository.TheatreRepository;
import com.example.movie.service.MovieService;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200")
public class TheatreController {
	

	@Autowired
	TheatreRepository theatreRepository;
	
	@Autowired
	MovieService movieService;
	
	@GetMapping("/theatres")
	  public List<Theatre> getTheatres() {
		return theatreRepository.findAll();
	  }
	
	@PostMapping("/theatres")
	  public Theatre addTheatres(@RequestBody Theatre theatre) {
		return theatreRepository.save(theatre);
	  }
	
	
	@GetMapping("/theatres/{name}") 
	  public List<Theatre> getMoviesInTheatres(@PathVariable("name") String name)
	  {
		  return movieService.getTheatresForMovie(name);
	  }
	 

}
