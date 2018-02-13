package com.bl.resource;

import java.io.File;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import com.bl.model.Client;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
import com.bl.service.IAgentService;

@Path("")
public class AgentResource {
	@Autowired
	IAgentService agentService;
	
	@GET
	@Path("/agents/{id}/clients")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Client> getAllClients(@PathParam("id") Long idAgent){
		List<Client> clients = agentService.getAllClient(idAgent);
		
		return clients;
	}
	
	@PUT
	@Path("/clients")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Client updateClient(Client client) {
		Client clientResponse = agentService.updateClient(client);
		return clientResponse;
	}
	
	@GET
	@Path("clients/{id}/documents")
	@Produces(MediaType.APPLICATION_JSON)
	public List<File> getDocuments(@PathParam("id") Long idClient){
		//TODO creer le clientservice et changer le return
		return null;
	}
	
	@GET
	@Path("/agents/{id}/demandes/chequier")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DemandeChequier> getAllDemandesChequier(@PathParam("id") Long idAgent){
		//TODO modifier methode dans interface et implementation de agentService
		return null;
	}
	
	@PUT
	@Path("/demandes/chequier")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public DemandeChequier updateDemandeChequier(DemandeChequier demChequier) {
		//TODO creer methode dans interface et implementation de agentService
		return null;
	}
	
	@GET
	@Path("/agents/{id}/demandes/mdp")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DemandeModifMdp> getAllDemandesMdp(@PathParam("id") Long idAgent){
		//TODO modifier methode dans interface et implementation de agentService
		return null;
	}
	
	@PUT
	@Path("/demandes/mdp")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public DemandeChequier updateDemandeMdp(DemandeModifMdp demMdp) {
		//TODO creer methode dans interface et implementation de agentService
		return null;
	}
	
	@GET
	@Path("/agents/{id}/demandes/nouveauCompte")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DemandeModifMdp> getAllDemandesNouveauCompte(@PathParam("id") Long idAgent){
		//TODO modifier methode dans interface et implementation de agentService
		return null;
	}
	
	@PUT
	@Path("/demandes/nouveauCompte")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public DemandeChequier updateDemandeNouveauCompte(DemandeNouveauCompte demNouv) {
		//TODO creer methode dans interface et implementation de agentService
		return null;
	}
}
