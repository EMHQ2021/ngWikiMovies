import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  form: any = {
    email: 'admin@newhorizons.edu.pe',
    password: 'NewHorizons2021',
  };

  handleSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      (data) => {
        if (data.statusCode === 200) {
          this.router.navigate(['/home']);
        }
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
