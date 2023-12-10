import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambrefrontComponent } from './chambrefront.component';

describe('ChambrefrontComponent', () => {
  let component: ChambrefrontComponent;
  let fixture: ComponentFixture<ChambrefrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChambrefrontComponent]
    });
    fixture = TestBed.createComponent(ChambrefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
