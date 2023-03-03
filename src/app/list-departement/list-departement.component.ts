import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { departement } from '../entity/departement';
import { DepartementServiceService } from '../service/departement-service.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit {
  Listdepartement :departement[]=[];
  
  chercher !:number
  nbrTotalEmploye !:number

  constructor(private depService:DepartementServiceService,private router:Router) { }

  ngOnInit(): void {
    this.depService.listDepart().subscribe({
      next:(data)=>this.Listdepartement=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("list of dep")
      
    })
  }

  calcule(){
    this.nbrTotalEmploye=0
    for(let i=0;i<this.Listdepartement.length;i++){
      this.nbrTotalEmploye=this.Listdepartement[i].nb_employer+ this.nbrTotalEmploye
    }
  }



}
