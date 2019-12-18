import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: './login/login.module#LoginModule'  },
  {path:'signup', loadChildren: './signup/signup.module#SignupModule'  },
  {path:'movies', loadChildren: './movies/movies.module#MoviesModule'  },
  {path:'admin', loadChildren: './admin/admin.module#AdminModule'  },
  {path:'book', loadChildren: './booking/booking.module#BookingModule' },
  {path:'payment', loadChildren: './payment/payment.module#PaymentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
