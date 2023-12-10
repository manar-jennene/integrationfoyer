import { Component } from '@angular/core';
import { Room } from 'src/app/models/Room';
import { ChambresService } from 'src/app/service/chambres.service';

@Component({
  selector: 'app-chambrefront',
  templateUrl: './chambrefront.component.html',
  styleUrls: ['./chambrefront.component.css']
})
export class ChambrefrontComponent {
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
