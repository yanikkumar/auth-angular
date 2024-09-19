import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import RegisterModel from './class/RegisterModel';
import LoginModel from './class/LoginModel';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent {
  activeForm: 'login' | 'register' = 'login';
  registerObj: RegisterModel = new RegisterModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private _snackbar: MatSnackBar) {}

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  registerForm() {
    // debugger;
    console.log(this.registerObj);

    const localUser = localStorage.getItem('users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.registerObj);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.registerObj);
      localStorage.setItem('users', JSON.stringify(users));
    }

    this._snackbar.open('User Registered Succesfully', 'close');
  }

  loginForm() {
    console.log(this.loginObj);
  }
}
