//Dummy Notification
export class Notification {
	constructor(libelle : string,
	date : Date,
	isRead : boolean){}
}



export const notifications : Notification[] = [
	{ libelle : "Notif 1", date : new Date(), isRead : false},
	{ libelle : "Notif 2", date : new Date(), isRead : false},
	{ libelle : "Notif 3", date : new Date(), isRead : false},
	{ libelle : "Notif 4", date : new Date(), isRead : false},
	{ libelle : "Notif 5", date : new Date(), isRead : true},
	{ libelle : "Notif 6", date : new Date(), isRead : true}
]