import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/agent', component: AgentComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
