import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocfrontComponent } from './blocfront.component';

describe('BlocfrontComponent', () => {
  let component: BlocfrontComponent;
  let fixture: ComponentFixture<BlocfrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocfrontComponent]
    });
    fixture = TestBed.createComponent(BlocfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
