import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc';
import { BlocService } from 'src/app/service/bloc.service';

@Component({
  selector: 'app-blocfront',
  templateUrl: './blocfront.component.html',
  styleUrls: ['./blocfront.component.css']
})
export class BlocfrontComponent {
  searchText:any;

  blocs: Bloc[]=[];

  //blocs!: Bloc[];
  constructor(private router: Router, private blocService: BlocService){
    
   }

  ngOnInit() {
    this.blocService.getBlocList().subscribe(
      (data: any) => {
        this.blocs = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
  }


  /*ngOnInit() {

    this.blocService.getBlocList().subscribe((response: any)=>{
      this.blocs=response;
    }

    );
  }*/
  /*deleteBloc(id: number) {
    // Afficher une boîte de confirmation
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce bloc ?');
  
    if (confirmDelete) {
      console.log("ID à supprimer :", id);
  
      this.blocService.deleteBloc(id).subscribe(
        res => {
          console.log("Réponse de la suppression :", res);
  
          // Rediriger vers la liste des foyers après la suppression réussie
          this.router.navigate(['/bloc-list']);
        },
        err => console.log("Erreur lors de la suppression :", err)
      );
    }
  }*/

  deleteBloc(idBloc: number){
    this.blocService.deleteBloc(idBloc).subscribe((response) => {
      console.log(response);
      this.blocs=this.blocs.filter((b:any)=>{
        return idBloc !=b.idBloc;
      }
      );
    })
  }



}
