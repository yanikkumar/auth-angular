import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './Pages/login-register/login-register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginregister',
    pathMatch: 'full',
  },
  {
    path: 'loginregister',
    component: LoginRegisterComponent,
  },
];
