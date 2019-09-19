import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { MaterialModule } from '../sharedModule/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipeModule } from '../sharedModule/pipe/pipe.module';
import { TooltipModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [BookingComponent, PaymentComponent, ChildComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PipeModule,
    FormsModule,
    TooltipModule.forRoot(),
    NgbModule
  ]
})
export class BookingModule { }
