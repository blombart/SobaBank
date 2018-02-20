package com.bl.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bl.dao.IAgentDAO;
import com.bl.dao.IClientDAO;
import com.bl.dao.ICompteDAO;
import com.bl.dao.IDemandeDAO;
import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.Compte;
import com.bl.model.CompteEpargne;
import com.bl.model.DemandeChequier;
import com.bl.model.DemandeModifMdp;
import com.bl.model.DemandeNouveauCompte;
import com.bl.model.Operation;
import com.bl.service.IClientService;

@Component
public class ClientServiceImpl implements IClientService {
	@Autowired
	private IClientDAO clientDAO;
	@Autowired
	private ICompteDAO compteDAO;
	@Autowired
	private IDemandeDAO DemandeDAO;
	@Autowired
	private IAgentDAO agentDAO;

	@Override
	public Client createClient(Client client) {
		Client cl = clientDAO.createClient(client);
		return cl;
	}

	@Override
	public List<Compte> findAllComptes(Long idClient) {
		Client cl = clientDAO.GetClientById(idClient);
		
		//On ajoute les comptes du client dans une liste
		List<Compte> comptes = cl.getComptes();
		return comptes;
	}
	
	@Override
	public List<Compte> getComptesByIdClient(Long idClient) {
		//on recupere le client
		Client cl = clientDAO.GetClientById(idClient);
		cl.setComptes(compteDAO.getAllComptes());
		//On ajoute les comptes du client dans une liste
		List<Compte> comptes = new ArrayList<Compte>();
		for(Compte c : cl.getComptes()){
			if (!(c instanceof CompteEpargne)){
				comptes.add(c);
			}
		}
		return comptes;
	}
	
	@Override
	public List<CompteEpargne> getComptesEpargneByIdClient(Long idClient) {
		//on recupere le client
				Client cl = clientDAO.GetClientById(idClient);
				
				//On ajoute les comptes du client dans une liste
				List<CompteEpargne> comptesEpargne = new ArrayList<CompteEpargne>();
				for(Compte c : cl.getComptes()){
					if (c instanceof CompteEpargne){
						comptesEpargne.add((CompteEpargne)c);
					}
				}
				return comptesEpargne;
	}

	@Override
	public List<Operation> getOperationsByCompte(Long idCompte) {
		Compte cp = compteDAO.getCompteByID(idCompte);
		List<Operation> operations = cp.getOperations();
		return operations;
	}

	@Override
	public Compte getCompte(Long idCompte) {
		Compte cp = compteDAO.getCompteByID(idCompte);
		return cp;
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<Operation> getOperationFilteredByCompte(Long idCompte, int mois) {
		Compte cp = compteDAO.getCompteByID(idCompte);
		List<Operation> opes = cp.getOperations();
		List<Operation> opesFiltered = new ArrayList<Operation>();
		for(Operation ope : opes){
			if(ope.getDate().getMonth() == mois){
				opesFiltered.add(ope);
			}
		}
		
		return opesFiltered;
	}

	@Override
	public DemandeModifMdp createDemandeMdpForClient(Long idClient) {
		//on recupere le client
		Client cl = clientDAO.GetClientById(idClient);
		//On cree la nouvelle demande
		DemandeModifMdp mdp = new DemandeModifMdp();
		mdp.setDateDemande(new Date());
		mdp.setStatus("NON TRAITEE");
		mdp.setLibelle("Mot de passe");
		
		//On ajoute la demande au client
		cl.getDemandes().add(mdp);
		
		//on edite le client dans la liste
		clientDAO.updateClient(cl);
		//On edite la demande
		DemandeDAO.updateDemande(mdp);
		
		return mdp;
		
		
	}

	@Override
	public DemandeChequier createDemandeChequierForClient(Long idClient) {
		//on recupere le client
				Client cl = clientDAO.GetClientById(idClient);
				//On cree la nouvelle demande
				DemandeChequier chequier = new DemandeChequier();
				chequier.setDateDemande(new Date());
				chequier.setStatus("NON TRAITEE");
				chequier.setLibelle("Chequier");
				
				//On ajoute la demande au client
				cl.getDemandes().add(chequier);
				
				//on edite le client dans la liste
				clientDAO.updateClient(cl);
				//On edite la demande
				DemandeDAO.updateDemande(chequier);
				
				return chequier;
	}

	@Override
	public DemandeNouveauCompte createDemandeNouveauCompteForClient(
			Long idClient, Compte compte) {
			Client cl = clientDAO.GetClientById(idClient);
			DemandeNouveauCompte dem = new DemandeNouveauCompte();
			dem.setDateDemande(new Date());
			dem.setStatus("NON TRAITEE");
			dem.setLibelle("Nouveau compte");
			dem.setNewCompte(compte);
			
			cl.getDemandes().add(dem);
			
			//on edite le client dans la liste
			clientDAO.updateClient(cl);
			//On edite la demande
			DemandeDAO.updateDemande(dem);
			
			return dem;
	}

	@Override
	public Boolean virement(Long idCompteDebit, Long idCompteCredit,
			float montant, String libelle) {
		Compte compteDebit = compteDAO.getCompteByID(idCompteDebit);
		Compte compteCredit = compteDAO.getCompteByID(idCompteCredit);
		
		compteDebit.debiter(montant);
		compteCredit.crediter(montant);
		
		compteDAO.updateCompte(compteDebit);
		compteDAO.updateCompte(compteCredit);
		//TODO gerer l'ajout d'operation
		
		return true;
		
	}

	@Override
	public Boolean virement(Long idCompteDebit, String rib, float montant,
			String libelle) {
		Compte compteDebit = compteDAO.getCompteByID(idCompteDebit);
		Compte compteCredit = compteDAO.getCompteByRIB(rib);
		
		compteDebit.debiter(montant);
		compteCredit.crediter(montant);
		
		compteDAO.updateCompte(compteDebit);
		compteDAO.updateCompte(compteCredit);
		//TODO gerer l'ajout d'operation
		return true;
	}

	@Override
	public Agent getAgentForClient(Long idClient) {
		Client cl = clientDAO.GetClientById(idClient);
		Agent ag = agentDAO.getAgentById(cl.getMonAgent());
		
		return ag;
	}




	
	
	
	

}
