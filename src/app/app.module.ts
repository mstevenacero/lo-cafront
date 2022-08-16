import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './modules/home/inicio/inicio.component';
import { LoadComponent } from './modules/home/load/load.component';
import { WithdrawalComponent } from './modules/user/withdrawal/withdrawal.component';
import { ConsignmentComponent } from './modules/user/consignment/consignment.component';
import { HomeuserComponent } from './modules/user/homeuser/homeuser.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorInterceptor } from './interceptor/jwt-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
