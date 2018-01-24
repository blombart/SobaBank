import { Component, OnInit } from '@angular/core';
import { Agent} from './agent';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class AgentComponent implements OnInit {

	 agents = [new Agent('berto','marco','063251645','mail@gmail.com')];

  constructor() { }

  ngOnInit() {
  }

}
