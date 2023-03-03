import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementServiceService } from '../service/departement-service.service';
import { departement } from '../entity/departement';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

    departemen :departement=new departement();
    id!:string
  constructor(private activate:ActivatedRoute,private router: Router,private depService:DepartementServiceService) { }

  ngOnInit(): void {
    this.id=this.activate.snapshot.params['id'];
    if(this.id!=null){
      this.depService.getById(this.id).subscribe({
        next:(data)=>this.departemen=data,
        error:(error)=>console.log(error),
        complete:()=>console.log("matricule added")
      })    
    }
  }

  adddep(){
    if(this.id!=null){
      this.depService.updateDepart(this.departemen).subscribe({
        next:(data)=>this.router.navigateByUrl("/list"),
        error:(error)=>console.log(error),
        complete:()=>console.log("dep updated")
      })
    }else{

      this.depService.ajouterDepart(this.departemen).subscribe({
        next:(data)=>this.router.navigateByUrl("/list"),
        error:(error)=>console.log(error),
        complete:()=>console.log("dep added")
      })
      console.log(this.departemen)
    }

    }
   

}
