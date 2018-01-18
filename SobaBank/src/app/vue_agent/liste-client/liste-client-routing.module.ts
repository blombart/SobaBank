import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListeClientComponent } from './liste-client.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/listeClient', component: ListeClientComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ListeClientRoutingModule { }