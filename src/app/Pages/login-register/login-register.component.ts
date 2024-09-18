import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent {
  activeForm: 'login' | 'register' = 'register';

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }
}
