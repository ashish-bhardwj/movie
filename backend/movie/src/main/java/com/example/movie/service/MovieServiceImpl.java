package com.example.movie.service;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.movie.model.Booking;
import com.example.movie.model.Movie;
import com.example.movie.model.Theatre;
import com.example.movie.repository.MovieRepository;
import com.example.movie.repository.TheatreRepository;

@Service
public class MovieServiceImpl implements MovieService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private TheatreRepository theatreRepository;

	@Override
	public List<Movie> getAllMovies() {
		// TODO Auto-generated method stub
		List<Movie> list=movieRepository.findAll();
		return list;
	}

	@Override
	public void addBook(Movie movie) {
		// TODO Auto-generated method stub
		movieRepository.save(movie);
		
	}

	@Override
	public Movie getBookById(String id) {
		// TODO Auto-generated method stub
		Movie movie=movieRepository.findBy_id(id);
		return movie;
	}

	@Override
	public void deleteBook(ObjectId id) {
		// TODO Auto-generated method stub
		movieRepository.deleteById(id);		
	}

	@Override
	public boolean booking(Booking booking) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Movie searchByTitle(String param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Movie> searchByRating(String param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Theatre> getTheatres() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public List<Theatre> getTheatresForMovie(String name) {
		// TODO Auto-generated method stub
		List<Theatre> theatres=theatreRepository.findByMoviesTitle(name);
		for(Theatre theatre:theatres) {
			theatre.getMovies().removeIf((Movie movie)-> ! movie.getTitle().equalsIgnoreCase(name));	
		}
		
		return theatres;
	}

	@Override
	public Theatre addTheatres(Theatre theatre) {
		// TODO Auto-generated method stub
		return null;
	}

}
