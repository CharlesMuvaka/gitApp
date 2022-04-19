import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NtFoundComponent } from './nt-found/nt-found.component';
import { UserInputComponent } from './user-input/user-input.component';

import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'user/:gitUserName', component:UserComponent},
  {path:'', component:UserInputComponent},
  {path:'back', component:UserInputComponent},
  {path:'notThere', component:NtFoundComponent},
  {path:'**', component:NtFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
