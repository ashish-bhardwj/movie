package com.mindtree.booking.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.booking.model.Booking;
import com.mindtree.booking.service.BookingService;


@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/booking")
	  public List<Booking> getBookings() {
		return bookingService.findBookings();
	  }
	
	@PostMapping("/booking")
	  public boolean booking( @RequestBody Booking booking) {
		System.out.println(booking.toString());
		boolean success;
		success=bookingService.booking(booking);
		if(success)
			return true;
		else
			return false;
			
	  }
	
	@GetMapping("/seats")
	  public ArrayList<String> getSeats() {
		return bookingService.findSeats();
	  }
	
	@GetMapping("/booking/{id}")
	  public List<Booking> getBookingsForAUser(@PathVariable("id") String id) {
		return bookingService.getBookingForUser(id);
	  }

}
