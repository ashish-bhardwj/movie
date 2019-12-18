package com.mindtree.booking.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.booking.model.Booking;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private com.mindtree.booking.repository.BookingRepository bookingRepository;

	@Override
	public boolean booking(Booking booking) {
		// TODO Auto-generated method stub
		Booking success=null;
		success=bookingRepository.save(booking);
		if(success.getMovieTitle()==null || success.getMovieTitle()==" ")
			return false;
		else 
			return true;
	}

	@Override
	public ArrayList<String> findSeats() {
		// TODO Auto-generated method stub
		ArrayList<String> seat=new ArrayList<String>();
		ArrayList<String[]> seats=new ArrayList<String[]>();
		List<Booking> list=bookingRepository.findAll();
		for(Booking book:list) {
			String[] str=book.getSeats();
			for(String i:str) {
				seat.add(i);
			}
		}	
		
		return seat;
	}

	@Override
	public List<Booking> getBookingForUser(String id) {
		// TODO Auto-generated method stub
		List<Booking> list=bookingRepository.findByUserId(id);
		return list;
	}

	@Override
	public List<Booking> findBookings() {
		// TODO Auto-generated method stub
		List<Booking> list=bookingRepository.findAll();
		return list;
	}

}
