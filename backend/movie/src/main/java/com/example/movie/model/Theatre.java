package com.example.movie.model;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "theatres")
public class Theatre {
	
	@Id
	public ObjectId _id;
	
	private String name;
	private String location;
	private List<Movie> movies;
	
	/*
	 * public ObjectId get_id() { return _id; } public void set_id(ObjectId _id) {
	 * this._id = _id; }
	 */
	
  public String get_id() { return _id.toHexString(); }
	  
	  public void set_id(ObjectId _id) { this._id = _id; }
	  
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public List<Movie> getMovies() {
		return movies;
	}
	public void setMovies(List<Movie> movies) {
		this.movies = movies;
	}
	
	

}
