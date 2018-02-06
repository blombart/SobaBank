package com.bl.dao;

import java.util.List;

import com.bl.model.Compte;

public interface ICompteDAO {
	public List<Compte> getAllComptes();
	
	public Compte addCompte(Compte compte);
	
	public Compte updateCompte(Compte compte);
	
}
