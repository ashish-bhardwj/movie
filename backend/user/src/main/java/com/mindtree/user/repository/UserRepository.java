package com.mindtree.user.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.user.model.User;


@Repository
public interface UserRepository extends  MongoRepository<User,ObjectId> {
	
	User findBy_id(ObjectId id);
	
	User findByEmail(String email);
	User findByFirstName(String firstName);

}
