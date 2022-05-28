import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './component/alert/alert.component';
import { HomeComponent } from './component/home/home.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'alert', component: AlertComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(M => M.AuthModule) },
  { path: "admin", canActivate: [AuthGuard], canActivateChild: [AdminGuard], loadChildren: () => import('./dasboard/dashboard.module').then(M => M.DashboardModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
