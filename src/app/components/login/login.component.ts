import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  users: any[] = [];
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.users.find(
        (u) =>
          u.email === this.loginForm.value.email &&
          u.password === this.loginForm.value.password
      );
      if (user) {
        console.log('Login successful');
        this.loginError = null;
        if (user.role === 'Admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/home']);
        }
      } else {
        console.log('Invalid email or password');
        this.loginError = 'Wrong credentials';
      }
    }
  }
}
