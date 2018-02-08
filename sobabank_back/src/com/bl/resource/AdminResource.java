package com.bl.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;
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
	
	@POST
	@Path("/agents")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Agent createAgent(Agent agent){
		Agent agentResponse = adminService.addAgent(agent);
		return agentResponse;
	}
	
	@PUT
	@Path("/agents")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Agent updateAgent(Agent agent){
		Agent agentResponse = adminService.updateAgent(agent);
		return agentResponse;
	}
	
	@POST
	@Path("/agents/{idAgent}/demandes/{idDemande}/affecte")
	public Boolean affecterDemande(@PathParam("idAgent") Long idAgent, @PathParam("idDemande") Long idDemOuv){
		Boolean response = adminService.affecterDemande(idAgent, idDemOuv);
		return response;
	}
	
	@POST
	@Path("/agents/{idNewAgent}/{idOldAgent}/demandes/{idDemande}/affecte")
	public Boolean modifierAffectation(@PathParam("idNewAgent") Long idNewAgent,@PathParam("idOldAgent") Long idOldAgent,
			@PathParam("idDemande") Long idDemande){
		Boolean response = adminService.modifierAffectation(idNewAgent, idOldAgent, idDemande);
		return response;
	}
	
	@GET
	@Path("/demandes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DemandeOuvertureCompte> listAllDemandeOuverture(){
		List<DemandeOuvertureCompte> demandes = adminService.getAllDemandeOuvertureCompte();
		return demandes;
	}
	
	
	
}
