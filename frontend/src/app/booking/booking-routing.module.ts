import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:':id',component:BookingComponent,
children:[
  {path:'payment',component:PaymentComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
