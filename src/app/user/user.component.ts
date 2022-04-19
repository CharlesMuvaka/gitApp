import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUsersService } from '../get-users.service';
import { GitUser } from '../git-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    input:string;
  

  user:GitUser = new GitUser('','','','','','');

  constructor(private userDetail:GetUsersService, private activeRoute:ActivatedRoute) { 
   
    
  
   console.log();
   console.log(this.user )
   


    
  }

  ngOnInit(): void {


    this.input = this.activeRoute.snapshot.paramMap.get('gitUserName');
    console.log(this.input)
    this.userDetail.changeUserName(this.input);

    this.userDetail.getUserInfo().subscribe((data)=>{
      this.user.gitUserName = data.login;
      this.user.gitUserProfileImg = data.avatar_url;
      this.user.userRepos  = data.public_repos;
      this.user.dateCreated = data.created_at;
      this.user.dateUpdate = data.updated_at;
      this.user.repoUrl = data.repos_url;
      
    }, (error)=>{
      window.open("http://localhost:4200/notThere")

    });
  

    
  }



}
