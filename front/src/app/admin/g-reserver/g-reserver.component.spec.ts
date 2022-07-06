import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GReserverComponent } from './g-reserver.component';

describe('GReserverComponent', () => {
  let component: GReserverComponent;
  let fixture: ComponentFixture<GReserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GReserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
