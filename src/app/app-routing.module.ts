import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuardGuard } from './guards/user-guard.guard';
import { LoadComponent } from './modules/home/load/load.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',
  loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)},
  {path:'user',
  loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule),canActivate:[UserGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
