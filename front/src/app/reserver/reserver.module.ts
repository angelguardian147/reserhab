import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserverComponent } from './reserver.component';
import { ReserverService } from './reserver.service';
import { ValidateComponent } from './validate/validate.component';



@NgModule({
  declarations: [ReserverComponent, ValidateComponent],
  imports: [
    CommonModule
  ],
  providers: [ReserverService]
})
export class ReserverModule { }
