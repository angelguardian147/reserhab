import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAccount } from 'src/app/interfaces/account';
import { IUser } from 'src/app/interfaces/user';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit, OnDestroy {

  user: IUser = {};
  account: IAccount = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
   this.getUser();
  }

  getUser(){
    this.user = JSON.parse(this.accountService.getData() || '{}');
    if(this.user.account){
      this.account = this.user.account;
      console.log(this.account)
    }
  }

  ngOnDestroy(): void {
      this.accountService.removeData();
  }

}
