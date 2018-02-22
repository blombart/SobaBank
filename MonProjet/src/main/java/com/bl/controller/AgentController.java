package com.bl.controller;

import java.io.File;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bl.model.Client;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAgentService;

@RestController
public class AgentController {
	@Autowired
	IAgentService agentService;
	
	@RequestMapping(value ="/agents/{id}/clients",method = RequestMethod.GET)
	public Set<Client> getAllClients(@PathVariable("id") Long idAgent){
		Set<Client> clients = agentService.getAllClient(idAgent);
		return clients;
	}
	
	@RequestMapping(value ="/clients",method = RequestMethod.PUT)
	public @ResponseBody Client updateClient(@RequestBody Client client) {
		Client clientResponse = agentService.updateClient(client);
		return clientResponse;
	}
	
	@RequestMapping(value ="clients/{id}/documents",method = RequestMethod.GET)
	public Set<File> getDocuments(@PathVariable("id") Long idClient){
		Set<File> files = agentService.getDocumentsForClient(idClient);
		return files;
	}
	
	@RequestMapping(value ="/agents/{id}/demandes/chequier",method = RequestMethod.GET)
	public Set<DemandeChequier> getAllDemandesChequier(@PathVariable("id") Long idAgent){
		Set<DemandeChequier> chequiers = agentService.getAllDemandeChequier(idAgent);
		return chequiers;
	}
	
	@RequestMapping(value ="/demandes/chequier",method = RequestMethod.PUT)
	public @ResponseBody DemandeChequier updateDemandeChequier(@RequestBody DemandeChequier demChequier) {
		//TODO creer methode dans interface et implementation de agentService
		return null;
	}
	
	
	@RequestMapping(value ="/agents/{id}/demandes/mdp",method = RequestMethod.GET)
	public Set<DemandeModifMdp> getAllDemandesMdp(@PathVariable("id") Long idAgent){
		Set<DemandeModifMdp> mdps = agentService.getAllDemandeMdp(idAgent);
		return mdps;
	}
	
	@RequestMapping(value ="/demandes/mdp",method = RequestMethod.PUT)
	public @ResponseBody DemandeChequier updateDemandeMdp(@RequestBody DemandeModifMdp demMdp) {
		//TODO creer methode dans interface et implementation de agentService
		return null;
	}
	
	@RequestMapping(value ="/agents/{id}/demandes/nouveauCompte",method = RequestMethod.GET)
	public Set<DemandeNouveauCompte> getAllDemandesNouveauCompte(@PathVariable("id") Long idAgent){
		Set<DemandeNouveauCompte> nouveauxComptes = agentService.getAllDemandeNouveauCompte(idAgent);
		return nouveauxComptes;
	}
	
	@RequestMapping(value ="/demandes/nouveauCompte",method = RequestMethod.PUT)
	public @ResponseBody DemandeChequier updateDemandeNouveauCompte(@RequestBody DemandeNouveauCompte demNouv) {
		//TODO creer methode dans interface et implementation de agentService
		return null;
	}
	
	
	@RequestMapping(value ="/agents/{id}/demandes/demandeOuverture",method = RequestMethod.GET)
	public Set<DemandeOuvertureCompte> getAllDemandeOuverture(@PathVariable("id") Long idAgent){
		Set<DemandeOuvertureCompte> dems = agentService.getAllDemandeOuvertureCompte(idAgent);
		return dems;
	}
	
	@RequestMapping(value ="/demandes/{id}/valid",method = RequestMethod.POST)
	public @ResponseBody DemandeOuvertureCompte validDemandeOuvertureCompte(@PathVariable("id") Long idDem){
		DemandeOuvertureCompte demResponse = agentService.validDemandeOuvertureCompte(idDem);
		return demResponse;
	}

}
