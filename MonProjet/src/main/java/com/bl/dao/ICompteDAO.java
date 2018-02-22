package com.bl.dao;

import java.util.List;
import java.util.Set;

import com.bl.model.Compte;

public interface ICompteDAO {
	public Set<Compte> getAllComptes();
	
	public Compte addCompte(Compte compte);
	
	public Compte updateCompte(Compte compte);
	
	public Compte getCompteByID(Long id);
	
	public Compte getCompteByRIB(String rib);
	
	public Set<Compte> getComptesEpargneByIdClient(Long idClient);
	
}
