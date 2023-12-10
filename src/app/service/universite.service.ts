import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http: HttpClient) { }

  private url="http://localhost:8888/Universite";


  getUniversitesWithFoyer(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.url}/withFoyer`);
  }




  createUniversite(universite : Universite){
    return this.http.post<Universite>(this.url, universite);
  }
  deleteUniversite(idUniversite:number){
    const URL = `${this.url}/${idUniversite}`
    return this.http.delete<Universite>(URL);
  }
  
  updateUniversite(universite: Universite) {
    const URL= `${this.url}/${universite.idUniversite}`;
    return this.http.put<Universite>(URL, universite);
  }

  getUniversiteList(){
    return this.http.get(this.url);
  }
  getUniversite(idUniversite:number){
    return this.http.get(this.url +"/universites/"+ idUniversite);
  }

  getUniversiteById(id: number): Observable<Universite> {
    const URL = `${this.url}/${id}`;
    return this.http.get<Universite>(URL);
  }  
}