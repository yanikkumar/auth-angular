import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './Pages/login-register/login-register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-register',
    pathMatch: 'full',
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent,
  },
];
