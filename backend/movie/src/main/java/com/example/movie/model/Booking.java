package com.example.movie.model;

import java.math.BigInteger;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings")
public class Booking {
	
	@Id
	public ObjectId _id;
	
	private String username;
	private String movieTitle;
	private String location;
	private String[] seats;
	private String time;
	private int ticketCount;
	private BigInteger price;
	
	
	
	public String[] getSeats() {
		return seats;
	}
	public void setSeats(String[] seats) {
		this.seats = seats;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMovieTitle() {
		return movieTitle;
	}
	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public int getTicketCount() {
		return ticketCount;
	}
	public void setTicketCount(int ticketCount) {
		this.ticketCount = ticketCount;
	}
	public BigInteger getPrice() {
		return price;
	}
	public void setPrice(BigInteger price) {
		this.price = price;
	}
	
  public String get_id() { return _id.toHexString(); }
	  
	  public void set_id(ObjectId _id) { this._id = _id; }
	 

}
