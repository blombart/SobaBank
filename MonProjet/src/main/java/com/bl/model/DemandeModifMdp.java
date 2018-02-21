package com.bl.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("mdp")
public class DemandeModifMdp extends Demande {

	public DemandeModifMdp() {
		super();
		// TODO Auto-generated constructor stub
	}


}
