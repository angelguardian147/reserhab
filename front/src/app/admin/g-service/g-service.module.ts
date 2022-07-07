import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GServiceComponent } from './g-service.component';
import { GServiceService } from './g-service.service';



@NgModule({
  declarations: [GServiceComponent],
  imports: [
    CommonModule
  ],
  providers: [GServiceService]
})
export class GServiceModule { }
