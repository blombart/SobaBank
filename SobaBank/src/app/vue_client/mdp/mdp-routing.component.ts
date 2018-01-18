import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdpComponent } from './mdp.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/mdp', component: MdpComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MdpRoutingModule { }
