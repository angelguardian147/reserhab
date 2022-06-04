import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurityComponent } from './segurity.component';

describe('SegurityComponent', () => {
  let component: SegurityComponent;
  let fixture: ComponentFixture<SegurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
