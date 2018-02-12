import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForminscritionComponent } from './forminscrition.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/inscription', component: ForminscritionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
