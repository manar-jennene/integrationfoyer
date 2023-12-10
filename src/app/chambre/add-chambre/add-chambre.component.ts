import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/Room';
import { TypeChambre } from 'src/app/models/typeChambre.enum';
import { ChambresService } from 'src/app/service/chambres.service';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})

  export class AddChambreComponent implements OnInit{
    listChambre:Room[]=[];
    newRoom!:Room;


    typesChambre = Object.values(TypeChambre); // Get enum values
    constructor(private Router:Router,private chambreService: ChambresService) { }
    ngOnInit(): void {


    }
    add(F:NgForm){
        console.log(this.listChambre.length);

        if(F.valid){

            this.newRoom = {
                idChambre: F.value.idChambre,
                numeroChambre: F.value.numeroChambre,
                typec: F.value.typeC,
            };
        };

        this.chambreService.AddChambre(this.newRoom).subscribe(
            () => {
                alert('added successfully');
                F.resetForm();
                this.Router.navigate(['listchambre']); // Redirection vers la liste des réservations après l'ajout

            },
            (error) => {
                console.error('error adding reservation',error); }  )  }


}


