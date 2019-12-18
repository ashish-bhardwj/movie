import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }                from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './sharedModule/material/material.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService,
} from "angular-6-social-login";
import { BookingModule } from './booking/booking.module';
import { LoaderComponent } from './sharedModule/loader/loader.component';
import { LoaderInterceptor } from './sharedModule/interceptors/loader.interceptor';


// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("343997037151-u7e8l497koitbsofjcirmgc8b465co40.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true } ,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs,
   
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
