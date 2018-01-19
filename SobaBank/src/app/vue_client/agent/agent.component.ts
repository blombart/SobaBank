import { Component, OnInit } from '@angular/core';
import { Agent} from './agent';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class AgentComponent implements OnInit {

	 agents = [new Agent('berto','marco','063251645','mail')  ,   new Agent('omar','sta','0123456789','mail2')];

  constructor() { }

  ngOnInit() {
  }

}
