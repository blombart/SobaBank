package com.bl.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.bl.model.Agent;
import com.bl.model.Compte;


@Path("")
public class ClientResource {

	@GET
	@Path("/clients/{id}/agent")
	@Produces(MediaType.APPLICATION_JSON)
	public Agent getAgent(@PathParam("id") Long idClient){
		//TODO faire le client service
		return null;
	}
	
	@POST
	@Path("/virement/externe")
	public Boolean virement(@FormParam("idCompteDebit") Long idCompteDebit,
			@FormParam("rib") String rib, @FormParam("montant") float montant,
			@FormParam("libelle") String libelle){
		//TODO faire le client service
		return null;
	}
	
	@POST
	@Path("/virement/interne")
	public Boolean virement(@FormParam("idCompteDebit") Long idCompteDebit,
			@FormParam("idCompteCredit") Long idCompteCredit, @FormParam("montant") float montant,
			@FormParam("libelle") String libelle){
		//TODO faire le client service
		return null;
	}
	
	@POST
	@Path("/clients/{id}/demandes/nouveauCompte")
	@Consumes(MediaType.APPLICATION_JSON)
	public Boolean createDemandeNewCompte(@PathParam("id")Long idClient, Compte compte){
		//TODO faire le client service
				return null;
	}
	
	@POST
	@Path("/clients/{id}/demandes/chequier")
	public Boolean createDemandeChequier(@PathParam("id") Long idClient){
		//TODO faire le client service
		return null;
	}
	
	@POST
	@Path("/clients/{id}/demandes/mdp")
	public Boolean createDemandeMdp(@PathParam("id") Long idClient){
		//TODO faire le client service
		return null;
	}
}
