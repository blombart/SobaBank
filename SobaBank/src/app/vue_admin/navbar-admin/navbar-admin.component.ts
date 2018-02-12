import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class NavbarAdminComponent implements OnInit {
	id: string = '0';

  constructor() { }

  ngOnInit() {
  }

}
