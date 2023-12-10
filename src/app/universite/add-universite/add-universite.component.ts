import { Component, OnInit } from '@angular/core';
import { Foyer } from 'src/app/models/foyer';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {

  universite: Universite = new Universite();
  
  showAlert=false;
  
  selectedFoyer: Foyer | undefined; // Garder le foyer sélectionné

  //foyers : Foyer[] = [];
  
  constructor(private universiteService:UniversiteService){}


  
  
  ngOnInit() {

  }
   saveUniversite(){
    this.universiteService.createUniversite(this.universite).subscribe((response) => {
      console.log(response);
      this.universite=new Universite();
      this.showAlert=true;
    }
    );
   }
   closeAlert(){
    this.showAlert=false;
   }

}
