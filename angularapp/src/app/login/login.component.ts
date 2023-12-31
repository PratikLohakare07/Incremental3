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

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['/admin']);
      this.router.navigate(['/organizer']);
    });
  }
}
