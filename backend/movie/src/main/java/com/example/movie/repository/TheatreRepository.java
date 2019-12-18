package com.example.movie.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.movie.model.Theatre;

public interface TheatreRepository extends MongoRepository<Theatre, ObjectId> {
	
	public List<Theatre> findByMoviesTitle(String name);
	
	//public List<Theatre> findByMoviesId(String name);

}
