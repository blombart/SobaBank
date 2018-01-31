import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeconnexionComponent } from './deconnexion.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/deconnexion', component: DeconnexionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DeconnexionRoutingModule { }
