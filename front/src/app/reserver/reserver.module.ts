import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserverComponent } from './reserver.component';
import { ReserverService } from './reserver.service';
import { ProfileComponent } from './profile/profile.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';



@NgModule({
  declarations: [ReserverComponent, ProfileComponent, PersonalDataComponent],
  imports: [
    CommonModule
  ],
  providers: [ReserverService]
})
export class ReserverModule { }
