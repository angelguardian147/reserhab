import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GOwnerComponent } from './g-owner.component';
import { GOwnerService } from './g-owner.service';



@NgModule({
  declarations: [GOwnerComponent],
  imports: [
    CommonModule
  ],
  providers: [GOwnerService]
})
export class GOwnerModule { }
