import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer';
import { FoyerService } from 'src/app/service/foyer.service';


@Component({
  selector: 'app-addfoyer',
  templateUrl: './addfoyer.component.html',
  styleUrls: ['./addfoyer.component.css']
})
export class AddfoyerComponent {
  searchItem!:String ;
  List_foyer:Foyer[]=[];
  newFoyer!:Foyer;
  constructor(private Router:Router, private foyers:FoyerService){}


  addFoyer(F: NgForm) {

    console.log(this.List_foyer.length);

    if (F.valid) {
      this.newFoyer= {
        idFoyer:F.value.id,
         nomFoyer: F.value.nomFoyer,
         capaciteFoyer: F.value.capaciteFoyer,
       };
       console.log(this.newFoyer.nomFoyer);
       //this.List_user.push(newUser);
        this.foyers.addFoyer(this.newFoyer).subscribe(()=>{alert('added succefully');
        this.Router.navigateByUrl('/foyer/listfoyer');
      });

       F.resetForm();
    }
   }
}
