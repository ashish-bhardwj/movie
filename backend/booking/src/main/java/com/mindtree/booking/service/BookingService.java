package com.mindtree.booking.service;

import java.util.ArrayList;
import java.util.List;

import com.mindtree.booking.model.Booking;

public interface BookingService {
	
	public boolean booking(Booking booking);

	public ArrayList<String> findSeats();

	public List<Booking> getBookingForUser(String id);

	public List<Booking> findBookings();

}
