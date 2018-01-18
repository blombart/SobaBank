import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RechercheComponent } from './recherche.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/recherche', component: RechercheComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RechercheRoutingModule { }