package com.example.movie.repository;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.movie.model.Movie;

public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

//	Movie findBookById(ObjectId id);
	Movie findBy_id(String id);
	Movie findByTitle(String title);
	List<Movie> findByRatingGreaterThan(String rating); 

}
