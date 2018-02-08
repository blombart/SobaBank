import {Demande, Status} from './demandes';
import {Agent} from './agent';
import {Client} from './client'
import { User } from './user';


export class DemandeChequier extends Demande{
	constructor(public id: number,
		public dateDemande: Date,
		public libelle: string,
		public estAffecte: boolean,
		public status: string,
		public estValide: boolean,
		public agent: Agent,
		public client: Client){
	}
