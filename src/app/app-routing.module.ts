import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], canDeactivate: [AuthGuard] },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(M => M.AuthModule) },
  { path: "admin", canActivate: [AuthGuard], canActivateChild: [AdminGuard], loadChildren: () => import('./dasboard/dashboard.module').then(M => M.DashboardModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
