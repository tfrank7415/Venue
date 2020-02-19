import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  // Login form object
  loginForm;

  // Injecting form builder ans service into our class
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
      // Creating form fields
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password);
  }

  logout() {
    this.authService.logout();
  }
}
