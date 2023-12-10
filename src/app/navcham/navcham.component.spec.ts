import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavchamComponent } from './navcham.component';

describe('NavchamComponent', () => {
  let component: NavchamComponent;
  let fixture: ComponentFixture<NavchamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavchamComponent]
    });
    fixture = TestBed.createComponent(NavchamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
