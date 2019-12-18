package com.mindtree.booking.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.booking.model.Booking;

@Repository
public interface BookingRepository extends MongoRepository<Booking, ObjectId>{
	
	List<Booking> findByUserId(String id);

}
