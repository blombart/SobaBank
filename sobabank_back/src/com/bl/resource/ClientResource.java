package com.bl.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import com.bl.model.Agent;
import com.bl.model.Compte;
import com.bl.model.Operation;
import com.bl.service.IClientService;


@Path("")
public class ClientResource {
	@Autowired
	private IClientService clientService;

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
	
	@POST
	@Path("/comptes/{id}/operations/filter")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getOperationsFiltered(@PathParam("id") Long idCompte, @FormParam("mois") int mois){
		List<Operation> opes = clientService.getOperationFilteredByCompte(idCompte, mois);
		return opes;
	}
	
	@POST
	@Path("comptes/{id}/operations")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getAllOperations(@PathParam("id") Long idCompte){
		List<Operation> opes = clientService.getOperationsByCompte(idCompte);
		return opes;
	}
	
	@GET
	@Path("/comptes/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Compte getCompte(@PathParam("id") Long idCompte){
		Compte cp = clientService.getCompte(idCompte);
		return cp;
	}
	
	@GET
	@Path("/clients/{id}/comptes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compte> getAllComptes(@PathParam("id") Long idClient){
		List<Compte> comptes = clientService.getComptesByIdClient(idClient);
		return comptes;
	}
	
	
}
