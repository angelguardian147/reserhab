import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { HelpComponent } from '../modals/help/help.component';
import { LoginComponent } from '../modals/login/login.component';
import { LoginService } from '../modals/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  hasAuth: boolean = false;
  loginSubscription!: Subscription;
  
  constructor(private modalService: NgbModal, 
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.isAuth();
  }

  openLogin(role: string){
    const modal = this.modalService.open(LoginComponent);
    modal.componentInstance.Role = role;
  }

  openHelp(){
    this.modalService.open(HelpComponent);
  }

  isAuth(){
    this.loginSubscription = this.loginService.profile().subscribe({
      next: (res) => {
        this.hasAuth = true;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  logOut(){
    if(this.loginService.logOut()){
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
      this.loginSubscription.unsubscribe();
  }

}
