import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUnComponent } from './navbar-un.component';

describe('NavbarUnComponent', () => {
  let component: NavbarUnComponent;
  let fixture: ComponentFixture<NavbarUnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarUnComponent]
    });
    fixture = TestBed.createComponent(NavbarUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
