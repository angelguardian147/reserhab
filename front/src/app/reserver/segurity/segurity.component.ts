import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/interfaces/user';
import { BetterlevelComponent } from 'src/app/modals/betterlevel/betterlevel.component';
import { AccountService } from '../account/account.service';
import { SegurityService } from './segurity.service';

@Component({
  selector: 'app-segurity',
  templateUrl: './segurity.component.html',
  styleUrls: ['./segurity.component.scss']
})
export class SegurityComponent implements OnInit {

  user: IUser = {};
  pass_old!: string;
  pass_new!: string;
  pass_conf!: string;

  constructor(private modalService: NgbModal,
              private segurityService: SegurityService,
              private accountService: AccountService) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.accountService.getData() || '{}');
  }

  updatePass(){
    if(this.pass_old && this.pass_new && this.user.id){
      if(this.pass_conf == this.pass_new){
        this.segurityService.updatePassword(this.user.id, this.pass_old, this.pass_new, this.user).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          }
        });
      }else{
        console.log('no coinciden las constraseñas');
      }
    }
  }
  
  openLevel(){
    this.modalService.open(BetterlevelComponent);
  }


}
