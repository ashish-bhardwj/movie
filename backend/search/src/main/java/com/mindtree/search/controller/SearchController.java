package com.mindtree.search.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.search.model.Movie;
import com.mindtree.search.repository.SearchRepositoryImpl;


@RestController
@RequestMapping("/search")
@CrossOrigin(origins = "http://localhost:4200")
public class SearchController {
	
	private static final Logger logger = LoggerFactory.getLogger(SearchController.class);
	
	private SearchRepositoryImpl searchRepository;
	
	
	@Autowired
	public SearchController(SearchRepositoryImpl searchRepository) {
		super();
		this.searchRepository = searchRepository;
	}

	@GetMapping("/title/{param}")
	public Movie searchByTitle(@PathVariable("param") String param) {
		logger.info("Param info: "+ param);
		 return searchRepository.findByTitle(param);		
	}
	
	@GetMapping("/rating/{param}")
	public List<Movie> searchByRating(@PathVariable("param") String param) {
		 return searchRepository.findByRatingGreaterThan(param);	
	}
}
