package com.mindtree.search.repository;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import com.mindtree.search.controller.SearchController;
import com.mindtree.search.model.Movie;

@Repository
public class SearchRepositoryImpl implements SearchRepository {
	
	private static final Logger logger = LoggerFactory.getLogger(SearchRepositoryImpl.class);
	
	@Autowired
	RestTemplate restTemplate;

	@Override
	public Movie findByTitle(String param) {
		// TODO Auto-generated method stub
		logger.info("inside search repository : findByTitle() method ");
		ResponseEntity<Movie> response= restTemplate.getForEntity("http://localhost:8080/search/title/{param}", Movie.class, param);
		return response.getBody();
	}

	@Override
	public List<Movie> findByRatingGreaterThan(String param) {
		// TODO Auto-generated method stub
	//	ResponseEntity<List<Movie>> response= restTemplate.exchange("", HttpMethod.GET, null, Movie.class, param);
		return null;
	}

	
	
	

}
