import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterlevelComponent } from './betterlevel.component';

describe('BetterlevelComponent', () => {
  let component: BetterlevelComponent;
  let fixture: ComponentFixture<BetterlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
