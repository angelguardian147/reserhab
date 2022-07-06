import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOwnerComponent } from './g-owner.component';

describe('GOwnerComponent', () => {
  let component: GOwnerComponent;
  let fixture: ComponentFixture<GOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
