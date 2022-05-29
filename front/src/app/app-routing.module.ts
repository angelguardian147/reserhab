import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { AccountComponent } from './reserver/account/account.component';
import { PersonalDataComponent } from './reserver/personal-data/personal-data.component';
import { ProfileComponent } from './reserver/profile/profile.component';
import { ReserverComponent } from './reserver/reserver.component';

const routes: Routes = [
                        {path: '', component: HomeComponent},
                        {path: 'reserver', component: ReserverComponent, 
                              canActivate: [AuthGuard], 
                              canActivateChild: [AuthGuard], 
                              data: { 
                                role: 'reservador'
                              }, 
                              children: [
                                {path: 'account', component: AccountComponent, data: { role: 'reservador'}},
                                {path: 'profile', component: ProfileComponent, data: { role: 'reservador'}},
                                {path: 'information', component: PersonalDataComponent, data: { role: 'reservador'}}
                              ]
                        },
                        {path: 'owner', component: OwnerComponent, canActivate: [AuthGuard], data: { role: 'propietario'}},
                        {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'administrador'}}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
