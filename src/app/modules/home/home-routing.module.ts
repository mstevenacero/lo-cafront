import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoadComponent } from './load/load.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    
    path: '', children: [
      { path: 'carga', component:LoadComponent },
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'crear', component: CreateuserComponent },
      { path: '**', redirectTo: 'carga', pathMatch: 'full' },
     
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
 
  ]
})
export class HomeRoutingModule { }
