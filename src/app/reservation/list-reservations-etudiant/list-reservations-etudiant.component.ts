import { Reservation } from 'src/app/models/reservation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-list-reservations-etudiant',
  templateUrl: './list-reservations-etudiant.component.html',
  styleUrls: [],
})
export class ListReservationsEtudiantComponent implements OnInit {
  id: Number = NaN;
  isLoading: boolean = true;

  reservations: Reservation[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    // set id from params snapshot
    this.id = Number(this.route.snapshot.params?.['id']);
    console.log('🚀 ~ this.id:', this.id);

    // get reservations by id
    this.reservationService
      .getReservationsByEtudiant(Number(this.route.snapshot.params?.['id']))
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: `${response.data.reservations.length} réservations récupérées avec succès.`,
          });
          console.log('response:', response);
          this.reservations = response.data.reservations;
          console.log('🚀 ~ reservations:', this.reservations);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail:
              error?.error?.message ||
              'Une erreur est survenue lors de la validation de la réservation.',
          });
          console.error('Error fetching data:', error);
        },
      });
  }
}