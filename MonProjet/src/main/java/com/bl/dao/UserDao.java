package com.bl.dao;

import java.util.List;

import com.bl.model.User;

public interface UserDao {

	User findById(int id);

	User findByName(String name);

	void save(User user);

	void deleteUserById(int id);

	List<User> findAllUsers();

	void deleteAllUsers();

}
