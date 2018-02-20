package com.bl.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


@Entity
@DiscriminatorValue("Demande de chéquier")
public class DemandeChequier extends Demande {

	public DemandeChequier() {
		super();
		// TODO Auto-generated constructor stub
	}


}
