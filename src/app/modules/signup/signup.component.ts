import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

    this.signupForm.get('password')?.valueChanges.subscribe(() => {
      this.signupForm.get('confirmPassword')?.updateValueAndValidity();
      this.signupForm.markAllAsTouched()
    });

    this.signupForm.get('confirmPassword')?.setValidators([
      Validators.required,
      this.matchPassword.bind(this)
    ]);
  }

  matchPassword(control: any) {
    if (!this.signupForm) return null;

    const password = this.signupForm.get('password')?.value;
    const confirm = control.value;

    return password === confirm ? null : { mismatch: true };
  }

  onRegister(): void {
    if (this.signupForm.invalid) return;

    this.loading = true;
    this.errorMessage = '';

    const { name, email, phone, password } = this.signupForm.value;

    this.authService.register(  email,  password ).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/reminders']);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error.error?.message || 'Registration failed.';
      }
    });
  }
}
