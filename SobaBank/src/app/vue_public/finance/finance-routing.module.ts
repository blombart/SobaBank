import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FinanceComponent } from './finance.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/finance', component: FinanceComponent }
    ])
  ],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }

