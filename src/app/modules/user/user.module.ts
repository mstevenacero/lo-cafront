import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsignmentComponent } from './consignment/consignment.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { JwtInterceptorInterceptor } from 'src/app/interceptor/jwt-interceptor.interceptor';


@NgModule({
  declarations: [
    ConsignmentComponent
    ,HomeuserComponent,
    WithdrawalComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptorInterceptor,
      multi:true
    }
  ]
})
export class UserModule { }
