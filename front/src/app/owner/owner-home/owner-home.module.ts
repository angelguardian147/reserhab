import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerHomeComponent } from './owner-home.component';
import { OwnerHomeService } from './owner-home.service';



@NgModule({
  declarations: [OwnerHomeComponent],
  imports: [
    CommonModule
  ],
  providers: [OwnerHomeService]
})
export class OwnerHomeModule { }
