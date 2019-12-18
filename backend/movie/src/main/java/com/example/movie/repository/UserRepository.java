package com.example.movie.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.movie.model.User;


public interface UserRepository extends  MongoRepository<User,ObjectId> {
	
	User findBy_id(ObjectId id);
	
	User findByEmail(String email);
	User findByFirstName(String firstName);

}
