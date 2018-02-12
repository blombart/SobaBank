package com.bl.service;

import java.util.List;

import com.bl.dao.UserDAO;
import com.bl.model.User;

public class UserService {
	UserDAO userDao = new UserDAO();
	
	public List<User> getAllUsers(){
		List<User> userList = userDao.getAllUsers();
		return userList;
	}
	
	public User getUserForId(String id){
		User user = userDao.getUserForId(id);
		return user;
	}
	
	public User createUser(User user){
		User userResponse = userDao.createUser(user);
		return userResponse;
	}
	
	public User updateUser(User user){
		User userResponse = userDao.updateUser(user);
		return userResponse;
	}
	
	public User deleteUser(String id){
		User userResponse = userDao.deleteUser(id);
		return userResponse;
	}
	
	public List<User> deleteAllUser(){
		List<User> userList = userDao.deleteAllUser();
		return userList;
	}
}
