package com.bl.service;

import java.util.List;

import com.bl.model.User;

public interface IUserService {
	public List<User> getAllUsers();
	
	public User getUserForId(Long id);
	
	public User createUser(User user);
	
	public User updateUser(User user);
	
	public User deleteUser(Long id);

	User authenticateUser(String name, String password);
	
	
}
