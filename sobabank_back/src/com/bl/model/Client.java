package com.bl.model;

import java.io.File;
import java.util.List;

public class Client extends User {
	private String adresse;
	private String numTel;
	private int nbEnfants;
	private String situationMatrimonial;
	private Agent monAgent;
	private List<Compte>comptes;
	private List<Demande> demandes;
	private List<File> files;
	private boolean isClient;
	

	public List<File> getFiles() {
		return files;
	}

	public void setFiles(List<File> files) {
		this.files = files;
	}

	public Boolean getIsClient() {
		return isClient;
	}

	public void setIsClient(Boolean isClient) {
		this.isClient = isClient;
	}

	public Client(){
		super();
	}
	



	public Client(String adresse, String numTel, int nbEnfants, String situationMatrimonial, Agent monAgent,
			List<Compte> comptes, List<Demande> demandes, List<File> files, boolean isClient) {
		super();
		this.adresse = adresse;
		this.numTel = numTel;
		this.nbEnfants = nbEnfants;
		this.situationMatrimonial = situationMatrimonial;
		this.monAgent = monAgent;
		this.comptes = comptes;
		this.demandes = demandes;
		this.files = files;
		this.isClient = isClient;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getNumTel() {
		return numTel;
	}

	public void setNumTel(String numTel) {
		this.numTel = numTel;
	}

	public int getNbEnfants() {
		return nbEnfants;
	}

	public void setNbEnfants(int nbEnfants) {
		this.nbEnfants = nbEnfants;
	}

	public String getSituationMatrimonial() {
		return situationMatrimonial;
	}

	public void setSituationMatrimonial(String situationMatrimonial) {
		this.situationMatrimonial = situationMatrimonial;
	}

	public Agent getMonAgent() {
		return monAgent;
	}

	public void setMonAgent(Agent monAgent) {
		this.monAgent = monAgent;
	}

	public List<Compte> getComptes() {
		return comptes;
	}

	public void setComptes(List<Compte> comptes) {
		this.comptes = comptes;
	}

	public List<Demande> getDemandes() {
		return demandes;
	}

	public void setDemandes(List<Demande> demandes) {
		this.demandes = demandes;
	}

	public void setClient(boolean isClient) {
		this.isClient = isClient;
	}
	
	
	
	
}
