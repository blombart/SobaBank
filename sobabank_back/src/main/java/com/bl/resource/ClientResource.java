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
import com.bl.model.CompteEpargne;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
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
		Agent ag = clientService.getAgentForClient(idClient);
		return ag;
	}
	
	@POST
	@Path("/virement/externe")
	public Boolean virement(@FormParam("idCompteDebit") Long idCompteDebit,
			@FormParam("rib") String rib, @FormParam("montant") float montant,
			@FormParam("libelle") String libelle){
		Boolean b = clientService.virement(idCompteDebit, rib, montant, libelle);
		return b;
	}
	
	@POST
	@Path("/virement/interne")
	public Boolean virement(@FormParam("idCompteDebit") Long idCompteDebit,
			@FormParam("idCompteCredit") Long idCompteCredit, @FormParam("montant") float montant,
			@FormParam("libelle") String libelle){
		Boolean b = clientService.virement(idCompteDebit, idCompteCredit, montant, libelle);
		return b;
	}
	
	@POST
	@Path("/clients/{id}/demandes/nouveauCompte")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public DemandeNouveauCompte createDemandeNewCompte(@PathParam("id")Long idClient, Compte compte){
		DemandeNouveauCompte dem = clientService.createDemandeNouveauCompteForClient(idClient, compte);
		return dem;
	}
	
	@POST
	@Path("/clients/{id}/demandes/chequier")
	@Produces(MediaType.APPLICATION_JSON)
	public DemandeChequier createDemandeChequier(@PathParam("id") Long idClient){
		DemandeChequier chequier = clientService.createDemandeChequierForClient(idClient);
		return chequier;
	}
	
	@POST
	@Path("/clients/{id}/demandes/mdp")
	@Produces(MediaType.APPLICATION_JSON)
	public DemandeModifMdp createDemandeMdp(@PathParam("id") Long idClient){
		DemandeModifMdp mdp = clientService.createDemandeMdpForClient(idClient);
		return mdp;
	}
	
	@POST
	@Path("/comptes/{id}/operations/filter")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operation> getOperationsFiltered(@PathParam("id") Long idCompte, @FormParam("mois") int mois){
		List<Operation> opes = clientService.getOperationFilteredByCompte(idCompte, mois);
		return opes;
	}
	
	@GET
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
	
	@GET
	@Path("/clients/{id}/comptesEpargne")
	@Produces(MediaType.APPLICATION_JSON)
	public List<CompteEpargne> getAllComptesEpargne(@PathParam("id") Long idClient){
		List<CompteEpargne> comptesEpargne = clientService.getComptesEpargneByIdClient(idClient);
		return comptesEpargne;
	}
	
	@GET
	@Path("/clients/{id}/allComptes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Compte> findAllComptes(@PathParam("id") Long idClient){
		List<Compte> comptes = clientService.findAllComptes(idClient);
		return comptes;
	}
	
	
}