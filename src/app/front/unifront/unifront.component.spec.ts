import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifrontComponent } from './unifront.component';

describe('UnifrontComponent', () => {
  let component: UnifrontComponent;
  let fixture: ComponentFixture<UnifrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnifrontComponent]
    });
    fixture = TestBed.createComponent(UnifrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
