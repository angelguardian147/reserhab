import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { GOwnerComponent } from './g-owner/g-owner.component';
import { GReserverComponent } from './g-reserver/g-reserver.component';
import { GServiceComponent } from './g-service/g-service.component';



@NgModule({
  declarations: [AdminComponent, GOwnerComponent, GReserverComponent, GServiceComponent],
  imports: [
    CommonModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
