package com.bl.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "compte")
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name="type_compte")
public class Compte {
	
	@Id
	@GeneratedValue
	private Long id;
	@Column
	private int numCompte;
	@Column
	private Date dateCreation;
	@Column
	private float solde;
	@Column
	private String rib;
	@Column
	private float decouvertAutorise;
	@Column
	private float tauxAgios;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Set<Operation> operations;
	
	public Compte(){
		this.decouvertAutorise = 0f;
		this.tauxAgios = 18f;
	}
	

	
	public Compte(Long id, int numCompte, Date dateCreation, float solde, String rib, float decouvertAutorise,
			float tauxAgios, Set<Operation> operations) {
		super();
		this.id = id;
		this.numCompte = numCompte;
		this.dateCreation = dateCreation;
		this.solde = solde;
		this.rib = rib;
		this.decouvertAutorise = decouvertAutorise;
		this.tauxAgios = tauxAgios;
		this.operations = operations;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getNumCompte() {
		return numCompte;
	}

	public void setNumCompte(int numCompte) {
		this.numCompte = numCompte;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public float getSolde() {
		return solde;
	}

	public void setSolde(float solde) {
		this.solde = solde;
	}

	public String getRib() {
		return rib;
	}

	public void setRib(String rib) {
		this.rib = rib;
	}

	public float getDecouvertAutorise() {
		return decouvertAutorise;
	}

	public void setDecouvertAutorise(float decouvertAutorise) {
		this.decouvertAutorise = decouvertAutorise;
	}

	public float getTauxAgios() {
		return tauxAgios;
	}

	public void setTauxAgios(float tauxAgios) {
		this.tauxAgios = tauxAgios;
	}

	public Set<Operation> getOperations() {
		return operations;
	}

	public void setOperations(Set<Operation> operations) {
		this.operations = operations;
	}
	
	public void crediter(float montant){
		this.solde += montant;
	}
	
	public void debiter(float montant) throws Exception {
		//Si le compte a un decouvert
		if(decouvertAutorise !=0){
			//on debite seulement si le solde ne depasse pas le decouvert
			if((this.solde - montant) > -decouvertAutorise){
				this.solde -= montant ;
			} else {
				throw new Exception("solde insuffisant");
			}
		}else{
			if((this.solde - montant) >=0){
				this.solde -= montant ;
			} else {
				throw new Exception("solde insuffisant");
			}
		}
	}

	

	
	
	
	
}
