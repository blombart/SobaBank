export class Demande{
	id: string;
	agent: string;
	status: string;
	dateDem: Date;

	constructor(id: string,agent: string,status: string, dateDem: Date){
		this.id = id;
		this.agent = agent;
		this.status = status;
		this.dateDem = dateDem;
	}

	getId(){
		return this.id;
	}

	getAgent(){
		return this.agent;
	}

	getStatus(){
		return this.status;
	}

	getDateDem(){
		return this.dateDem;
	}
}