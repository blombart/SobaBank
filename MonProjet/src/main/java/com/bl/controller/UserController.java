package com.bl.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bl.model.User;
import com.bl.service.IClientService;
import com.bl.service.IUserService;

@RestController
public class UserController {

	@Autowired
	IUserService userService;
	@Autowired
	IClientService clientService;
	
	@RequestMapping(value ="/users/auth",method = RequestMethod.POST)
	public User authenticateUser(@RequestParam("username") String username, @RequestParam("pwd") String pwd){
		User userResponse = userService.authenticateUser(username,  pwd);
		
		System.out.println(userResponse.getEmail());
		return userResponse;
	}
}
