import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';

import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'user/:gitUserName', component:UserComponent},
  {path:'', component:UserInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
