import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { IHome } from 'src/app/interfaces/home';
import { IService } from 'src/app/interfaces/service';
import { IUser } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/modals/login/login.service';
import { AccountService } from 'src/app/reserver/account/account.service';
import { OwnerHomeService } from './owner-home.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
})
export class OwnerHomeComponent implements OnInit, OnDestroy {

  user: IUser = {};
  account: IAccount = {};
  home: IHome[] = [];
  hotel: IHome = {};
  services: IService[] = [];
  loginSubscription!: Subscription;
  accountSubscription!: Subscription;
  findSubscription!: Subscription;

  constructor(private loginService: LoginService,
              private ownerHomeService: OwnerHomeService) { }

  ngOnInit(): void {
    this.getProfile();
    this.findAllService();
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

  save(){
    this.ownerHomeService.createHotel(this.hotel).subscribe({
      next: (res) => {
        console.log(res);
        this.hotel = {};
        this.getProfile();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  
  findAllService(){
    if(this.services){
      this.findSubscription = this.ownerHomeService.findAllService().subscribe({
        next: (res) => {
          this.services = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }


  getData(username: string){
    this.accountSubscription = this.ownerHomeService.getAllData(username).subscribe({
      next: (res) => {
        if(res){
          this.account = JSON.parse(this.ownerHomeService.getData() || '{}');
          if(this.account.home){
            this.home = this.account.home;
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
