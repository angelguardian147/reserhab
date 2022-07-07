import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IService } from 'src/app/interfaces/service';
import { AdminHomeService } from '../admin-home/admin-home.service';

@Component({
  selector: 'app-g-service',
  templateUrl: './g-service.component.html',
  styleUrls: ['./g-service.component.scss']
})
export class GServiceComponent implements OnInit, OnDestroy {
  service: IService = {};
  services: IService[] = [];
  createSubscription!: Subscription;
  findSubscription!: Subscription;

  constructor(private adminService: AdminHomeService) { }

  ngOnInit(): void {
    this.findAllService();
  }

  createService(){
    this.createSubscription = this.adminService.createService(this.service).subscribe({
      next: (res) => {
        console.log(res);
        this.service = {};
        this.findAllService();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  findAllService(){
    if(this.services){
      this.findSubscription = this.adminService.findAllService().subscribe({
        next: (res) => {
          this.services = res;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  ngOnDestroy(): void {
      this.createSubscription.unsubscribe();
      this.findSubscription.unsubscribe();
  }

}
