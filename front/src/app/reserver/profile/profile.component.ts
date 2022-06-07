import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/interfaces/account';
import { IUser } from 'src/app/interfaces/user';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser = {};
  account: IAccount = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.user =  JSON.parse(this.accountService.getData() || '{}');
    if(this.user.account){
      this.account = this.user.account;
    }
  }

}
