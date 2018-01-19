export class Agent{
	constructor(
		public id: number,
		public nom: string,
		public prenom: string,
		public email: string,
		public mdp: string,
		public mat: string,
		public clients: String[],
		public demandes: String[])
	{
		
	}
}
