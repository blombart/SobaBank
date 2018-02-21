package com.bl.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import com.bl.model.Client;
import com.bl.model.User;
import com.bl.service.IClientService;
import com.bl.service.IUserService;


@Path("")
public class UserResource {
	
	@Autowired
	IUserService userService;
	@Autowired
	IClientService clientService;
		
		@GET
		@Produces(MediaType.APPLICATION_JSON)
		public List<User> listAllUsers(){
			List<User> userList = userService.getAllUsers();
			return userList;
	}
	
		@GET
		@Path("/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public User getUser(@PathParam("id") String id){
			User user = userService.getUserForId(id);
			return user;
		}
		
		@POST
		@Produces(MediaType.APPLICATION_JSON)
		@Consumes(MediaType.APPLICATION_JSON)
		public User createUser(User user){
			User userResponse = userService.createUser(user);
			return userResponse;
		}
		
		@PUT
		@Produces(MediaType.APPLICATION_JSON)
		@Consumes(MediaType.APPLICATION_JSON)
		public User updateUser(User user){
			User userResponse = userService.updateUser(user);
			return userResponse;
		}
		
		@DELETE
		@Path("/{id}")
		@Produces(MediaType.APPLICATION_JSON)
		public User deleteUser(@PathParam("id") String id){
			User userResponse = userService.deleteUser(id);
			return userResponse;
		}
		
		@DELETE
		@Produces(MediaType.APPLICATION_JSON)
		public List<User> deleteAllUser(){
			List<User> userList = userService.deleteAllUser();
			return userList;
		}
		
		//Partie utilisé par angular
		
		@POST
		@Path("/clients")
		@Consumes(MediaType.APPLICATION_JSON)
		public Long createClient(Client client){
			Client clientResponse = clientService.createClient(client);
			return clientResponse.getId();
		}
		
	
		
		@POST
		@Path("/users/auth")
		@Produces(MediaType.APPLICATION_JSON)
		public User authenticateUser(@FormParam("username") String username, @FormParam("pwd") String pwd){
			System.out.println("TEST");
			System.out.println(username +"   " + pwd);
			
			User userResponse = userService.authenticateUser(username,  pwd);
			
			System.out.println(userResponse.getEmail());
			return userResponse;
		}
		
		
}
