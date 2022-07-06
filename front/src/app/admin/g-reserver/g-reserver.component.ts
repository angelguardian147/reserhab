import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { IUser } from 'src/app/interfaces/user';
import { GOwnerService } from '../g-owner/g-owner.service';
import { GReserverService } from './g-reserver.service';

@Component({
  selector: 'app-g-reserver',
  templateUrl: './g-reserver.component.html',
  styleUrls: ['./g-reserver.component.scss']
})
export class GReserverComponent implements OnInit, OnDestroy {

  getOwnerSubscription!: Subscription;
  accounts: IAccount[] = [];
  users: IUser[] = [];

  constructor(private gReserverService: GReserverService) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  getAllOwners(){
    this.getOwnerSubscription = this.gReserverService.getOwners('reservador').subscribe({
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
