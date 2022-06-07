import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { MapsComponent } from './apis/maps/maps.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './modals/login/login.component';
import { LogcellComponent } from './modals/login/logcell/logcell.component';
import { LogemailComponent } from './modals/login/logemail/logemail.component';
import { HelpComponent } from './modals/help/help.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarSearchComponent } from './bar-search/bar-search.component';
import { DatepickerComponent } from './bar-search/datepicker/datepicker.component';
import { AddaccountComponent } from './modals/addaccount/addaccount.component';
import { AddpasswordComponent } from './modals/login/addpassword/addpassword.component';
import { ReserverComponent } from './reserver/reserver.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './reserver/account/account.component';
import { ProfileComponent } from './reserver/profile/profile.component';
import { PersonalDataComponent } from './reserver/personal-data/personal-data.component';
import { SegurityComponent } from './reserver/segurity/segurity.component';
import { BetterlevelComponent } from './modals/betterlevel/betterlevel.component';
import { ValidateComponent } from './reserver/validate/validate.component';
import { HomeReserverComponent } from './reserver/home-reserver/home-reserver.component';
import { PasswordLostComponent } from './modals/login/password-lost/password-lost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    MapsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogcellComponent,
    LogemailComponent,
    HelpComponent,
    BarSearchComponent,
    DatepickerComponent,
    AddaccountComponent,
    AddpasswordComponent,
    ReserverComponent,
    OwnerComponent,
    AdminComponent,
    AccountComponent,
    ProfileComponent,
    PersonalDataComponent,
    SegurityComponent,
    BetterlevelComponent,
    ValidateComponent,
    HomeReserverComponent,
    PasswordLostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
