import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurityComponent } from './segurity.component';
import { SegurityService } from './segurity.service';



@NgModule({
  declarations: [SegurityComponent],
  imports: [
    CommonModule
  ],
  providers: [SegurityService]
})
export class SegurityModule { }
