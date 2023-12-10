import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/Room';
import { ChambresService } from 'src/app/service/chambres.service';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {

  myChambre!: Room;
  reactiveForm: FormGroup=this.fb.group(
    {
      idChambre:[''],
      numeroChambre:[''],
      typec:['']
    }
  );
  constructor(private AR: ActivatedRoute, private fb: FormBuilder, private R: Router, private serviceChambre: ChambresService) {}
  ngOnInit(): void {
    this.serviceChambre.getChambreById(this.AR.snapshot.params["idChambre"]).subscribe(data =>{
    this.myChambre=data;
    this.reactiveForm.patchValue({idChambre: this.myChambre.idChambre,numeroChambre:this.myChambre.numeroChambre, typec:this.myChambre.typec});
    console.log(this.myChambre.numeroChambre)
  });
  }
  updateChambre(){
    this.serviceChambre.updateChambre(this.reactiveForm.value).subscribe( data =>{
      this.R.navigate(['listchambre']);
    })
  }



  get idChambre() {
    return this.reactiveForm.get('idChambre');
  }

  get numeroChambre() {
    return this.reactiveForm.get('numeroChambre');
  }

  get typec() {
    return this.reactiveForm.get('typec');
  }


}