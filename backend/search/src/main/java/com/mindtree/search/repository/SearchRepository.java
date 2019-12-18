package com.mindtree.search.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mindtree.search.model.Movie;

@Repository
public interface SearchRepository {
	
	public Movie findByTitle(String param);
	public List<Movie> findByRatingGreaterThan(String param);

}
