import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginUser(){
   console.log(this.password);
   if(this.password == "1234"){
   this.router.navigate(['store']);
   }
  }

}
