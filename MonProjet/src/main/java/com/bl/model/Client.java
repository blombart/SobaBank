package com.bl.model;


import java.io.File;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import javax.persistence.DiscriminatorValue;

import javax.persistence.Entity;
import javax.persistence.FetchType;

import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@DiscriminatorValue("Client")
public class Client extends User {
	@Column
	private String adresse;
	@Column
	private String numTel;
	@Column
	private int nbEnfants;
	@Column
	private String situationMatrimonial;
	
	
//	private Long idMonAgent;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Compte>comptes;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Demande> demandes;
	
	@Transient
	private List<File> files;
	
	private Boolean isClient;
	

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
	



	public Client(String adresse, String numTel, int nbEnfants, String situationMatrimonial,
			List<Compte> comptes, List<Demande> demandes, List<File> files, Boolean isClient) {
		super();
		this.adresse = adresse;
		this.numTel = numTel;
		this.nbEnfants = nbEnfants;
		this.situationMatrimonial = situationMatrimonial;
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

//	public Long getMonAgent() {
//		return idMonAgent;
//	}
//
//	public void setMonAgent(Long idMonAgent) {
//		this.idMonAgent = idMonAgent;
//	}

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

	public void generateMdp() {
		String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		String mdp ="";
		for(int i=0;i <8;i++) {
			int num = (int) (Math.random()*chars.length());
			System.out.println(num);
			mdp += chars.charAt(num);
		}
		this.setMdp(mdp);
	}
	
	
	
}
