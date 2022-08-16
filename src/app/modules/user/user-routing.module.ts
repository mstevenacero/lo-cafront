import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from 'src/app/guards/user-guard.guard';
import { ConsignmentComponent } from './consignment/consignment.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'consignacion', component: ConsignmentComponent },
      { path: 'usuario', component: HomeuserComponent },
      { path: 'retiro', component: WithdrawalComponent},
      { path: '**', redirectTo: 'usuario', pathMatch: 'full' },
     
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ]
})
export class UserRoutingModule { }
