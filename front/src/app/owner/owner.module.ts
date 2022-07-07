import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { OwnerService } from './owner.service';
import { OwnerHomeComponent } from './owner-home/owner-home.component';



@NgModule({
  declarations: [OwnerComponent, OwnerHomeComponent],
  imports: [
    CommonModule
  ],
  providers: [OwnerService]
})
export class OwnerModule { }
