import {DetailsDemandesComponent} from './vue_agent/details-demandes/details-demandes.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'detail/:id', component: DetailsDemandesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DetailsDemandesRoutingModule { }