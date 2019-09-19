package com.example.movie.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.movie.model.Movie;

public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

//	Movie findBookById(ObjectId id);
	Movie findBy_id(ObjectId id);

}
