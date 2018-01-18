import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListeDemandesComponent } from './liste-demandes.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/listeDemandes', component: ListeDemandesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ListeDemandesRoutingModule { }
