import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourantComponent } from './courant.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/courant', component: CourantComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CourantRoutingModule { }
