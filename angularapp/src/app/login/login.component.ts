import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;
  authService: any;


  constructor(private ls : AuthService, private route :Router, private fm : FormGroup) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // this.fm.group(
  //   username : "Username Required", Validators.required
  // )
  login(){
    this.ls.login(this.username,this.password).subscribe();
 
      // Replace this with actual authentication logic
      const token = 'your-generated-jwt-token';
  
      // Store token in local storage
      this.authService.setToken(token);
    }
  }
  
 
 
