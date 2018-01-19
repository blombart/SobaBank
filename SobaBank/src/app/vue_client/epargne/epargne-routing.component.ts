import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EpargneComponent } from './epargne.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/epargne', component: EpargneComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EpargneRoutingModule { }
