import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitUser } from './git-user';
import { UserComponent } from './user/user.component';



@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  // user:GitUser = new GitUser('','','', '', '','');

  username:string = 'Otieno100';

  constructor(private http:HttpClient) { 
     
  }

  changeUserName(usernamePara){
    this.username = usernamePara;

  }

  getUserInfo(){
    return  this.http.get<any>('https://api.github.com/users/' + this.username)

  }


  getRepos(){
    return this.http.get<any>('https://api.github.com/users/' + this.username + '/repos')
  }
}
