import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservnavComponent } from './reservnav.component';

describe('ReservnavComponent', () => {
  let component: ReservnavComponent;
  let fixture: ComponentFixture<ReservnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservnavComponent]
    });
    fixture = TestBed.createComponent(ReservnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
