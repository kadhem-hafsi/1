import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [

  {path:"add",component:AddDepartementComponent},
  {path:"list",component:ListDepartementComponent},
  {path:"edit/:id",component:AddDepartementComponent},
  {path:"**",component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
