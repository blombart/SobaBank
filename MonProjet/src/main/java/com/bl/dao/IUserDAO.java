package com.bl.dao;

import java.util.Set;

import com.bl.model.User;

public interface IUserDAO {
	public Set<User> getAllUsers();
	
	public User getUserForId(Long id);

	public User createUser(User user);
	
	public User updateUser(User user);
	
	public User deleteUser(Long id);

	User authenticateUser(String name, String password);
}
