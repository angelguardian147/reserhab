import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GServiceComponent } from './g-service.component';

describe('GServiceComponent', () => {
  let component: GServiceComponent;
  let fixture: ComponentFixture<GServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
