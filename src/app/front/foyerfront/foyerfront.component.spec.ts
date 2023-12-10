import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerfrontComponent } from './foyerfront.component';

describe('FoyerfrontComponent', () => {
  let component: FoyerfrontComponent;
  let fixture: ComponentFixture<FoyerfrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoyerfrontComponent]
    });
    fixture = TestBed.createComponent(FoyerfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
