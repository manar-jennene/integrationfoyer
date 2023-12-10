import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationsEtudiantComponent } from './list-reservations-etudiant.component';

describe('ListReservationsEtudiantComponent', () => {
  let component: ListReservationsEtudiantComponent;
  let fixture: ComponentFixture<ListReservationsEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListReservationsEtudiantComponent]
    });
    fixture = TestBed.createComponent(ListReservationsEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
