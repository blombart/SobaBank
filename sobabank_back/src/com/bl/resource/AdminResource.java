package com.bl.resource;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.bl.model.Agent;
import com.bl.service.IAdminService;
import com.bl.service.impl.AdminServiceImpl;

@Path("/admin")
public class AdminResource {

	IAdminService adminService = new AdminServiceImpl();
	
	@GET
	@Path("/agents")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Agent> listAllAgents(){
		List<Agent> agents = adminService.getAllAgent();
		return agents;
	}
	
	@GET
	@Path("/agents/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Agent getAgent(@PathParam("id") Long id){
		Agent agent =  adminService.getAgentById(id);
		return agent;
	}
}
