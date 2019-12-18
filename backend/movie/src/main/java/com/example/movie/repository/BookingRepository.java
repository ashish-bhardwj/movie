package com.example.movie.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.movie.model.Booking;

public interface BookingRepository extends MongoRepository<Booking, ObjectId> {

}
