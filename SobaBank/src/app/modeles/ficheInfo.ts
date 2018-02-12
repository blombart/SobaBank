export class FicheInfo{


constructor(public nom: string, 
				public prenom: string,
				public email: string,
				public numTel: string){

	}

}



export const fichesInfos = [
                            new FicheInfo("Hadjaz", "Abderrahmane", "abder@test.com","06457898564"),
                            new FicheInfo("Lombart", "Sebastien", "seb@test.com","06457898564"),
                            new FicheInfo("Sta", "Omar", "omar@test.com","06457898564"),
                            new FicheInfo("Seb", "Astien", "seb@test.com","06457898564"),
                           
									];