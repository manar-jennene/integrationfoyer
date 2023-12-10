import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Bloc } from 'src/app/models/bloc';
import { BlocService } from 'src/app/service/bloc.service';

@Component({
  selector: 'app-edit-bloc',
  templateUrl: './edit-bloc.component.html',
  styleUrls: ['./edit-bloc.component.css']
})
export class EditBlocComponent implements OnInit {

  idBloc: number | null = null;
  blocData: Bloc = {
    idBloc: 0, 
    nomBloc: '',
    capacityBloc: 0,
  };

  constructor(private route: ActivatedRoute,private router: Router,private blocs: BlocService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.idBloc = +idParam; // Convert string to number
      console.log('ID du bloc récupéré depuis l\'URL :', this.idBloc);

    }

    if (this.idBloc !== null) {
      this.blocs.getBlocById(this.idBloc).subscribe(
        (data: Bloc) => {
          this.blocData = data; // Update bloc data to display in the form
        },
        (error: HttpErrorResponse) => {
          console.error('Error retrieving bloc data', error);
          alert('Error retrieving bloc data');
        }
      );
    }
  }

  updateBloc(){
    console.log('Données avant envoi de la requête PUT :', this.blocData); // Ajout du log

  this.blocs.updateBloc(this.blocData).subscribe(
    (response) => {
      console.log('Réponse de la requête PUT :', response); // Log de la réponse si nécessaire
      this.blocData = new Bloc();
    },
    (error) => {
      console.error('Erreur lors de la requête PUT :', error); // Log de l'erreur si la requête échoue
    }
  );} 
  }