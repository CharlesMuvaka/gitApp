import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GitUser } from '../git-user';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  user:GitUser = new GitUser('','','','','','') 
  
  

  constructor(private route1:Router) { }

  ngOnInit(): void {
  
  }

  goToUrl(){
    
    this.route1.navigate(['user', this.user.gitUserName]);
    
  }


}
