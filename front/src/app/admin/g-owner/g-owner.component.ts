import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { IUser } from 'src/app/interfaces/user';
import { GOwnerService } from './g-owner.service';

@Component({
  selector: 'app-g-owner',
  templateUrl: './g-owner.component.html',
  styleUrls: ['./g-owner.component.scss']
})
export class GOwnerComponent implements OnInit, OnDestroy {

  getOwnerSubscription!: Subscription;
  accounts: IAccount[] = [];
  users: IUser[] = [];

  constructor(private gOwnerService: GOwnerService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  getAllOwners(){
    this.getOwnerSubscription = this.gOwnerService.getOwners('propietario').subscribe({
      next: (res: IUser[]) => {
        this.users = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  ngOnDestroy(): void {
      this.getOwnerSubscription.unsubscribe();
  }

}
