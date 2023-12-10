export interface Reservation {
    id: string;
    anneeUniversitaire: string;
    estValide: boolean;
    etudiants: any[];
    chambre?: any;
  }