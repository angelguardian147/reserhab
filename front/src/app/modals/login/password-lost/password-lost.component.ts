import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddpasswordComponent } from '../addpassword/addpassword.component';

@Component({
  selector: 'app-password-lost',
  templateUrl: './password-lost.component.html',
  styleUrls: ['./password-lost.component.scss']
})
export class PasswordLostComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  returnModal(){
    this.modalService.open(AddpasswordComponent);
    this.activeModal.dismiss('Cross click');
  }

}
