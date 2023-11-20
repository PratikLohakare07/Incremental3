import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = 'admin'
  password : string = 'password'
  role : 'ADMIN'
 
  constructor(private fb : FormBuilder , private router :Router) {
   
  }
  movieform=this.fb.group({
    username:['Username is required', Validators.required],
    password:['Password is required', Validators.required],
   
  })
  login(){
    return this.router.navigate(['/admin']);
  }
  ngOnInit(): void {
  }
 
}