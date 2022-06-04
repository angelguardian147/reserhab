import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-betterlevel',
  templateUrl: './betterlevel.component.html',
  styleUrls: ['./betterlevel.component.scss']
})
export class BetterlevelComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
