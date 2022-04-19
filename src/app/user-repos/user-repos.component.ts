import { Component, OnInit, Input } from '@angular/core';
import { GetUsersService } from '../get-users.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {
  @Input() inputPassed:string;

  userRepos:Repository[] = [];

  constructor(private repos:GetUsersService) { 
    
  }

  ngOnInit(): void {
    
    this.repos.changeUserName(this.inputPassed)

    this.repos.getRepos().subscribe((data)=>{
      this.userRepos = data
      console.log(this.userRepos)
    })
  }

}
