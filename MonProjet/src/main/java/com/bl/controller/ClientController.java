package com.bl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bl.model.Agent;
import com.bl.model.Compte;
import com.bl.model.CompteEpargne;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
import com.bl.model.Operation;
import com.bl.service.IClientService;

@RestController
public class ClientController {
	@Autowired
	private IClientService clientService;
	
	@RequestMapping(value ="/clients/{id}/agent",method = RequestMethod.GET)
	public Agent getAgent(@PathVariable("id") Long idClient){
		Agent ag = clientService.getAgentForClient(idClient);
		return ag;
	}
	
	@RequestMapping(value ="/virement/externe",method = RequestMethod.POST)
	public Boolean virement(@RequestParam("idCompteDebit") Long idCompteDebit,
			@RequestParam("rib") String rib, @RequestParam("montant") float montant,
			@RequestParam("libelle") String libelle){
		Boolean b = clientService.virement(idCompteDebit, rib, montant, libelle);
		return b;
	}
	
	@RequestMapping(value ="/virement/interne",method = RequestMethod.POST)
	public Boolean virement(@RequestParam("idCompteDebit") Long idCompteDebit,
			@RequestParam("idCompteCredit") Long idCompteCredit, @RequestParam("montant") float montant,
			@RequestParam("libelle") String libelle){
		Boolean b = clientService.virement(idCompteDebit, idCompteCredit, montant, libelle);
		return b;
	}
	
	@RequestMapping(value ="/clients/{id}/demandes/nouveauCompte",method = RequestMethod.POST)
	public DemandeNouveauCompte createDemandeNewCompte(@PathVariable("id")Long idClient, Compte compte){
		DemandeNouveauCompte dem = clientService.createDemandeNouveauCompteForClient(idClient, compte);
		return dem;
	}
	
	@RequestMapping(value ="/clients/{id}/demandes/chequier",method = RequestMethod.POST)
	public DemandeChequier createDemandeChequier(@PathVariable("id") Long idClient){
		DemandeChequier chequier = clientService.createDemandeChequierForClient(idClient);
		return chequier;
	}
	
	@RequestMapping(value ="/clients/{id}/demandes/mdp",method = RequestMethod.POST)
	public DemandeModifMdp createDemandeMdp(@PathVariable("id") Long idClient){
		DemandeModifMdp mdp = clientService.createDemandeMdpForClient(idClient);
		return mdp;
	}

	@RequestMapping(value ="/comptes/{id}/operations/filter",method = RequestMethod.POST)
	public List<Operation> getOperationsFiltered(@PathVariable("id") Long idCompte, @RequestParam("mois") int mois){
		List<Operation> opes = clientService.getOperationFilteredByCompte(idCompte, mois);
		return opes;
	}
	
	@RequestMapping(value ="comptes/{id}/operations",method = RequestMethod.POST)
	public List<Operation> getAllOperations(@PathVariable("id") Long idCompte){
		List<Operation> opes = clientService.getOperationsByCompte(idCompte);
		return opes;
	}

	@RequestMapping(value ="/comptes/{id}",method = RequestMethod.GET)
	public Compte getCompte(@PathVariable("id") Long idCompte){
		Compte cp = clientService.getCompte(idCompte);
		return cp;
	}

	@RequestMapping(value ="/clients/{id}/comptes",method = RequestMethod.GET)
	public List<Compte> getAllComptes(@PathVariable("id") Long idClient){
		List<Compte> comptes = clientService.getComptesByIdClient(idClient);
		return comptes;
	}
	
	@RequestMapping(value ="/clients/{id}/comptesEpargne",method = RequestMethod.GET)
	public List<Compte> getAllComptesEpargne(@PathVariable("id") Long idClient){
		List<Compte> comptesEpargne = clientService.getComptesEpargneByIdClient(idClient);
		return comptesEpargne;
	}

	@RequestMapping(value ="/clients/{id}/allComptes",method = RequestMethod.GET)
	public List<Compte> findAllComptes(@PathVariable("id") Long idClient){
		List<Compte> comptes = clientService.findAllComptes(idClient);
		return comptes;
	}
	

}
