import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/Room';
import { ChambresService } from 'src/app/service/chambres.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  listChambre: Room[] = [];

  searchText: any ; // Declare searchText variable

  constructor(private cs: ChambresService) { }

  ngOnInit(): void {
    this.getChambre();
    console.log(this.listChambre);


}

getChambre(){
    this.cs.getAll().subscribe(
      data=>{this.listChambre=data;
      console.log(this.listChambre);
      }
    )
}
  deleteChambre(id:any){
    this.cs.deleteChambre(Number(id)).subscribe(()=>this.getChambre())
      alert('chambre supprimée avec succès');

  }



}