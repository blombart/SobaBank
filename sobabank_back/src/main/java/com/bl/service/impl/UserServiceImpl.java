package com.bl.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bl.dao.IUserDAO;
import com.bl.model.User;
import com.bl.service.IUserService;

@Component
public class UserServiceImpl implements IUserService{
	@Autowired
	IUserDAO userDao;
	
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
	
	@Override
	public User authenticateUser(String name, String password) {
		System.out.println("USer service");
		System.out.println(name + " " +password);
		return userDao.authenticateUser(name, password);
	}
}
