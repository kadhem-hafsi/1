import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { departement } from '../entity/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/departement"


  listDepart(){
    return this.http.get<departement[]>(this.url)
   }
 
  ajouterDepart(departemen:departement){
   return this.http.post(this.url,departemen)
  }
 
  updateDepart(departement:departement){
   return this.http.put(this.url+"/"+departement.id,departement)
  }

  getById(id:any){
    return this.http.get<departement>(this.url+"/"+id)
   }



}
