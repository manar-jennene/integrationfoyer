export class User {
    id!:number;
    nom!:string;
    prenom!:string;
    email!:string;
    password!:string;
    age!:number;
    adresse!:string;
    nbphone!:number;
  role!:'admin' | 'client' | 'etudiant';


}
