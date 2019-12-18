package com.mindtree.search.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movies")
public class Movie {
	
	@Id
	public ObjectId _id;
	
	private String title;
	private String description;
	private String rating;
	private String language;
	private String genre;
	private String poster;
	private String location;
	private String[] timings;
	private String actors;
	private String releaseDate;
	private boolean showing;
	
	
	public boolean isShowing() {
		return showing;
	}

	public void setShowing(boolean showing) {
		this.showing = showing;
	}

	public String getActors() {
		return actors;
	}

	public void setActors(String actors) {
		this.actors = actors;
	}

	/*
	 * public ObjectId get_id() { return _id; }
	 * 
	 * public void set_id(ObjectId _id) { this._id = _id; }
	 */
	public String[] getTimings() {
		return timings;
	}

	public void setTimings(String[] timings) {
		this.timings = timings;
	}

	
	  public String get_id() { return _id.toHexString(); }
	  
	  public void set_id(ObjectId _id) { this._id = _id; }
	 
	
	
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPoster() {
		return poster;
	}
	public void setPoster(String poster) {
		this.poster = poster;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	
	
	
}
