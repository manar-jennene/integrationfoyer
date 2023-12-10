import { Injectable } from '@angular/core';
import { Bloc } from '../models/bloc';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/Room';

@Injectable({
  providedIn: 'root'
})
export class ChambresService {

  private URLpostgetdelete="http://localhost:8081/chambre"
  private urlup="http://localhost:8081/chambre/updateChambre";
  private   urlById =  "http://localhost:8081/chambre/Chambres"

    private  urlGet ="http://localhost:8081/bloc/Blocs"
  Chambre=[];


    constructor(private http: HttpClient) {}

  updateChambre(Chambre: Room): Observable<Room> {
    return this.http.put<Room>(this.urlup, Chambre);
  }
    getAll(): Observable<Room[]>{
        return this.http.get<Room[]>(this.URLpostgetdelete);}


    AddChambre(chambre: Room): Observable<Room> {
        return this.http.post<Room>(this.URLpostgetdelete, chambre);
    }




    deleteChambre(idChambre: Number): Observable<Object> {
        //const URL = `${this.URL}/${idChambre}`;
        // @ts-ignore
      return this.http.delete(this.URLpostgetdelete+'/'+idChambre);
    }

    getChambreById(id: number): Observable<Room> {
        return this.http.get<Room>(this.urlById+'/'+id);

    }


    searchByType(type: string): Observable<Room[]> {

        const url = '${this.URLpostgetdelete}/getchambrebyType/${type}';
        return this.http.get<Room[]>(url);}

// const url = '${this.URLpostgetdelete}/getchambrebyType/${type}';
    //return this.http.get<Chambre[]>(url);
}
