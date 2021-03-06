package com.bl.service.impl;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bl.dao.IUserDAO;
import com.bl.model.User;
import com.bl.service.IUserService;

@Service("userService")
@Transactional
public class UserServiceImpl implements IUserService{
	@Autowired
	IUserDAO userDao;
	
	public Set<User> getAllUsers(){
		Set<User> userList = userDao.getAllUsers();
		return userList;
	}
	
	public User getUserForId(Long id){
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
	
	public User deleteUser(Long id){
		User userResponse = userDao.deleteUser(id);
		return userResponse;
	}
	
	@Override
	public User authenticateUser(String name, String password) {
		System.out.println("USer service");
		System.out.println(name + " " +password);
		return userDao.authenticateUser(name, password);
	}
}
