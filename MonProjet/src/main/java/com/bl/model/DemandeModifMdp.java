package com.bl.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Demande de MDP")
public class DemandeModifMdp extends Demande {

	public DemandeModifMdp() {
		super();
		// TODO Auto-generated constructor stub
	}


}
