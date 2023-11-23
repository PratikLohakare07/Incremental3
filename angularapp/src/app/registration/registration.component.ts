import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: string;
  password: string;
  confirmPassword: string;
  errorMessage: string;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register() {
    // Validate inputs, handle password complexity, and confirm password match
    // ...

    // Assuming authService.register returns an observable with user details
    this.authService.register(this.username, this.password).subscribe(
      // (user) => {
      //   if (user.role === 'ORGANIZER') {
      //     // Navigate to organizer page
      //     // this.router.navigate(['/organizer']);
      //   } else if (user.role === 'ADMIN') {
      //     // Navigate to admin page
      //     // this.router.navigate(['/admin']);
      //   }
      // },
      // (error) => {
      //   this.errorMessage = error.message; // Assuming the server sends an error message
      // }
    )
  }
}

