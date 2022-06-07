import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { AccountComponent } from './reserver/account/account.component';
import { HomeReserverComponent } from './reserver/home-reserver/home-reserver.component';
import { PersonalDataComponent } from './reserver/personal-data/personal-data.component';
import { ProfileComponent } from './reserver/profile/profile.component';
import { ReserverComponent } from './reserver/reserver.component';
import { SegurityComponent } from './reserver/segurity/segurity.component';
import { ValidateComponent } from './reserver/validate/validate.component';

const routes: Routes = [
                        {path: '', component: HomeComponent},
                        {path: 'reserver', component: ReserverComponent, 
                              canActivate: [AuthGuard], 
                              canActivateChild: [AuthGuard], 
                              data: { 
                                role: 'reservador'
                              }, 
                              children: [
                                {path: '', component: HomeReserverComponent, data: { role: 'reservador'} },
                                {path: 'account', component: AccountComponent, data: { role: 'reservador'} },
                                {path: 'profile', component: ProfileComponent, data: { role: 'reservador'} },
                                {path: 'information', component: PersonalDataComponent, data: { role: 'reservador'} },
                                {path: 'segurity', component: SegurityComponent, data: { role: 'reservador'} },
                                {path: 'validate', component: ValidateComponent, data: { role: 'reservador'} }
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
