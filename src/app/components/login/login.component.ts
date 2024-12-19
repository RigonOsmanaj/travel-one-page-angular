import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for structural directives

@Component({
  selector: 'app-login',
  standalone: true, // Standalone component setup
  imports: [ReactiveFormsModule, CommonModule], // Import necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // email field with validation
      password: ['', [Validators.required, Validators.minLength(6)]], // password field with validation
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle the form submission logic (e.g., authentication)
    }
  }
}
