import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReserverComponent } from './home-reserver.component';

describe('HomeReserverComponent', () => {
  let component: HomeReserverComponent;
  let fixture: ComponentFixture<HomeReserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeReserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
