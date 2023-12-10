import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/models/bloc';
import { Foyer } from 'src/app/models/foyer';
import { BlocService } from 'src/app/service/bloc.service';
import { FoyerService } from 'src/app/service/foyer.service';


@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent implements OnInit {
  
  foyers : Foyer[] = [];
  //foyers: any[] = [];
  selectedFoyerId: number | null = null;
  bloc = new Bloc();
  showAlert=false;
  constructor(private blocService:BlocService, private foyerService:FoyerService){}
  



  ngOnInit() {
    this.foyerService.getAllFoyer().subscribe(
      (data: any) => {
        this.foyers = data;
      },
      (error:any) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }



  saveBloc() {
    // Vérifiez si un foyer a été sélectionné
    if (this.selectedFoyerId) {
      const blocToAdd: Bloc = {
        nomBloc: this.bloc.nomBloc,
        capacityBloc: this.bloc.capacityBloc,
        idBloc: 0
      };
  
      this.blocService.createBloc(this.selectedFoyerId, blocToAdd)
        .subscribe((response) => {
          console.log(response);
          this.bloc = new Bloc();
          this.showAlert = true;
        });
    } else {
      console.log("Aucun foyer sélectionné pour affecter le bloc.");
    }
  }
  
   closeAlert(){
    this.showAlert=false;
   }


}

