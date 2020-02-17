import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

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
    private loginService: LoginService
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
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);
    console.log(this.loginService.loginUser(this.loginForm.value.email, this.loginForm.value.password));
  }
}
