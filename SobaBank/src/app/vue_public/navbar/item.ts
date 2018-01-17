export class Item {
	
	route: String;

	constructor(
		public id: number,
        public name: String){

	}


    public getRoute(){

    	this.route = "[routerLink]='['/"+this.name+"']' [routerLinkActive]='['router-link-active']' [routerLinkActiveOptions]='{exact:true}'"
    	 }

}