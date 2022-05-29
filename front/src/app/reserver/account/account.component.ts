import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { IUser } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/modals/login/login.service';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  user: IUser = {};
  account: IAccount = {};
  loginSubscription!: Subscription;
  accountSubscription!: Subscription;

  constructor(private loginService: LoginService,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    this.loginSubscription = this.loginService.profile().subscribe({
      next: (res) => {
        if(res.username){
          this.getData(res.username);
        }
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  getData(username: string){
    this.accountSubscription = this.accountService.getAllData(username).subscribe({
      next: (res) => {
        if(res){
          this.user = JSON.parse(this.accountService.getData() || '{}');
          if(this.user.account){
            this.account = this.user.account;
          }
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
      this.loginSubscription.unsubscribe();
      this.accountSubscription.unsubscribe();
  }

}
