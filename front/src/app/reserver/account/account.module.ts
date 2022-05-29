import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule
  ],
  providers: [AccountService]
})
export class AccountModule { }
