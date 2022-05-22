import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(M => M.AuthModule) },
  { path: "admin", loadChildren: () => import('./dasboard/dashboard.module').then(M => M.DashboardModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
