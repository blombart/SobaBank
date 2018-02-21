package com.bl.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bl.model.Agent;
import com.bl.model.DemandeOuvertureCompte;
import com.bl.service.IAdminService;

@RestController
public class AdminController {

	@Autowired
	IAdminService adminService;
	
	@RequestMapping(value ="/agents",method = RequestMethod.GET)
	public List<Agent> getAllAgents(){
		List<Agent> agents = adminService.getAllAgent();
		return agents;
	}
	
	@RequestMapping(value ="/agents/{id}",method = RequestMethod.GET)
	public Agent getAgent(@PathVariable("id") Long id){
		Agent agent =  adminService.getAgentById(id);
		return agent;
	}
	
	@RequestMapping(value ="/agents",method = RequestMethod.POST)
	
	public @ResponseBody Agent createAgent(@RequestBody Agent agent){
		System.out.println(agent.getNom());
		Agent agentResponse = adminService.addAgent(agent);
		return agentResponse;
	}
	
	@RequestMapping(value ="/agents",method = RequestMethod.PUT,consumes="application/json")
	public @ResponseBody Agent updateAgent(@RequestBody Agent agent){
		Agent agentResponse = adminService.updateAgent(agent);
		return agentResponse;
	}
	
	@RequestMapping(value ="/agents/{id}",method = RequestMethod.DELETE)
	public Agent deleteAgent(@PathVariable("id") Long id) {
		Agent ag = adminService.deleteAgent(id);
		return ag;
	}
	
	@RequestMapping(value ="/affecte",method = RequestMethod.POST)
	public Boolean affecterDemande(@RequestParam("idAgent")Long idAgent, @RequestParam("idDemande")Long idDemOuv){
		System.out.println(idAgent + " " + idDemOuv);
		Boolean response = adminService.affecterDemande(idAgent, idDemOuv);
		return response;
	}
	
	@RequestMapping(value ="/affecte/modification",method = RequestMethod.POST)
	public Boolean modifierAffectation(@RequestParam("idNewAgent") Long idNewAgent,@RequestParam("idOldAgent") Long idOldAgent,
			@RequestParam("idDemande") Long idDemande){
		Boolean response = adminService.modifierAffectation(idNewAgent, idOldAgent, idDemande);
		return response;
	}
	
	@RequestMapping(value ="/demandes",method = RequestMethod.GET)
	public List<DemandeOuvertureCompte> getAllDemandesOuverture(){
		List<DemandeOuvertureCompte> demandes = adminService.getAllDemandeOuvertureCompte();
		return demandes;
	}
	
//	@RequestMapping(value ="/demandes/{id}",method = RequestMethod.POST)
//	public DemandeOuvertureCompte createDemande(@PathVariable("id") Long idClient){
//		DemandeOuvertureCompte dem = adminService.createDemande(idClient);
//		return dem;
//	}
	
	@RequestMapping(value ="/inscription",method = RequestMethod.POST)
	public Boolean inscriptionClient(@RequestParam("nom") String nom,
			@RequestParam("prenom") String prenom,
			@RequestParam("email") String email,
			@RequestParam("adresse") String adresse,
			@RequestParam("numTel") String numTel,
			@RequestParam("nbEnfants") int nbEnfants,
			@RequestParam("situationMatrimonial") String situationMatrimonial){
		Boolean response = adminService.inscriptionClient(nom,prenom,email,adresse,numTel,nbEnfants,situationMatrimonial);
		return response;
	}
	
}
