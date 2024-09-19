import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './Pages/login-register/login-register.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

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
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
