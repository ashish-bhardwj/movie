import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'',component:PaymentComponent},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
