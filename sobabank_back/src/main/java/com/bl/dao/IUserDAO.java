package com.bl.dao;

import java.util.List;

import com.bl.model.User;

public interface IUserDAO {
	public List<User> getAllUsers();
	
	public User getUserForId(String id);

	public User createUser(User user);
	
	public User updateUser(User user);
	
	public User deleteUser(String id);
	
	public List<User> deleteAllUser();

	User authenticateUser(String name, String password);
}
