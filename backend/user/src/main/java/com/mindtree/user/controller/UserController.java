package com.mindtree.user.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.user.model.User;
import com.mindtree.user.repository.UserRepository;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/signin")
	public User login(@RequestBody User user) {
		User user2=new User();
		try {
			user2= userRepository.findByEmail(user.getEmail());
			if(user.getEmail().equals(user2.getEmail()) && user.getPassword().equals(user2.getPassword()))
				return user2;
		}
		catch (NullPointerException e) {
			e.getMessage();
			// TODO: handle exception
			System.out.println("catch");
		//	return user;
			
		}
		System.out.println("finally");
		user2.setEmail(user.getEmail());
		return user2;	
	}
	
	@PostMapping("/signup")
	public boolean signup(@RequestBody User user) {
		User usr=userRepository.save(user);
		if(usr!=null) {
			System.out.println("User"+user.toString());
			return true;
		}
		else
			return false;
			
	}
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return userRepository.findAll();
			
	}
	
	@GetMapping("/user")
	public Principal user(Principal principal) {
		return principal;
			
	}
	
	

}
