export class User{
	constructor(

	public id: number,
	public nom: string,
	public prenom: string,
	public email: string,
	public mdp: string,
	public role: string){


	}
}


//TODO Creer plusieurs utilisateur    OK
export const Users: User[] = [
			new User(1,"Hadjaz","Abderrahmane","habder@test.com","1234","guest"),
			new User(2,"Sta","Omar","omar@test.com","1234","client"),
			new User(3,"NomSeb","Sebastien","sb@test.com","1234","agent"),
			new User(4,"Lombart","Benjamanin","benj@test.com","1234","admin")
] ;

