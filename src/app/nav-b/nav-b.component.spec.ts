import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBComponent } from './nav-b.component';

describe('NavBComponent', () => {
  let component: NavBComponent;
  let fixture: ComponentFixture<NavBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBComponent]
    });
    fixture = TestBed.createComponent(NavBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
