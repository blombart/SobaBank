import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommandeComponent } from './commande.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/commande', component: CommandeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
