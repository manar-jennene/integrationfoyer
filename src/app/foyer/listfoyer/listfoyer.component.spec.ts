import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfoyerComponent } from './listfoyer.component';

describe('ListfoyerComponent', () => {
  let component: ListfoyerComponent;
  let fixture: ComponentFixture<ListfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListfoyerComponent]
    });
    fixture = TestBed.createComponent(ListfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
