import { Component, OnInit } from '@angular/core';
import { Agent} from './agent';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.css']
})
export class AgentComponent implements OnInit {

	 agents = [new Agent('bertolomi','marcostas','063251645','mail') ];

  constructor() { }

  ngOnInit() {
  }

}
