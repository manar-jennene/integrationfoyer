import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environnements/environment.developement';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  apiUrl = environment.baseUrl + '/reservations';
  constructor(
    private _http: HttpClient,
    public messageService: MessageService
  ) {}

  isLoading = false;
  data: Reservation[] = [];

  private parseData(response: any): Reservation[] {
    response.data.reservations.forEach((reservation: any) => {
      const chambre = response.data.chambres.find(
        (chambre: any) => chambre.idReservation === reservation.id
      );
      reservation.chambre = chambre;
    });
    return response.data.reservations;
  }
  getReservations() {
    this.isLoading = true;
    this._http.get(this.apiUrl).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: `${response.data.reservations.length} réservations récupérées avec succès.`,
        });
        console.log('response:', response);
        console.log('parsed', this.parseData(response));
        this.data = this.parseData(response);
        console.log('🚀 ~ reservations from service after parse:', this.data);
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

  getReservationsByEtudiant(idEtudiant: number) {
    return this._http.get(`${this.apiUrl}/etudiant/${idEtudiant}`);
  }
  getReservation(id: String) {
    return this._http.get(`${this.apiUrl}/${id}`);
  }

  addReservation(idChambre: number, cinEtudiant: number) {
    return this._http.post(`${this.apiUrl}/${idChambre}/${cinEtudiant}`, {});
  }

  updateReservation(id: String) {
    return this._http.put(`${this.apiUrl}/${id}`, {});
  }

  validateReservation(id: String) {
    return this._http.put(`${this.apiUrl}/valider/${id}`, {});
  }

  cancelReservation(cinEtudiant: number) {
    return this._http.delete(`${this.apiUrl}/${cinEtudiant}`);
  }

  getEtudiants() {
    return this._http.get(environment.baseUrl + '/etudiants');
  }

  getChambres() {
    return this._http.get(environment.baseUrl + '/chambres');
  }
}