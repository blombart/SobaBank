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

import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAdminService;


@Path("")
public class AdminResource {

	@Autowired
	IAdminService adminService;
	
	@GET
	@Path("/agents")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Agent> getAllAgents(){

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
	
	@DELETE
	@Path("/agents/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Agent deleteAgent(@PathParam("id") Long id) {
		Agent ag = adminService.deleteAgent(id);
		return ag;
	}
	
	@POST
	@Path("/affecte")
	public Boolean affecterDemande(@FormParam("idAgent")Long idAgent, @FormParam("idDemande")Long idDemOuv){
		Boolean response = adminService.affecterDemande(idAgent, idDemOuv);
		return response;
	}
	
	@POST
	@Path("/affecte/modification")
	public Boolean modifierAffectation(@FormParam("idNewAgent") Long idNewAgent,@FormParam("idOldAgent") Long idOldAgent,
			@FormParam("idDemande") Long idDemande){
		Boolean response = adminService.modifierAffectation(idNewAgent, idOldAgent, idDemande);
		return response;
	}
	
	@GET
	@Path("/demandes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DemandeOuvertureCompte> getAllDemandesOuverture(){
		List<DemandeOuvertureCompte> demandes = adminService.getAllDemandeOuvertureCompte();
		return demandes;
	}
	

	
	//Utiliser par la partie public
	@POST
	@Path("/demandes/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public DemandeOuvertureCompte createDemande(@PathParam("id") Long idClient){
		DemandeOuvertureCompte dem = adminService.createDemande(idClient);
		return dem;
	}
	
	
	
}
