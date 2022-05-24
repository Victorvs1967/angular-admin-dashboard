import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AddUserComponent } from './component/dashboard/component/add-user/add-user.component';
import { HeaderComponent } from './component/header/header.component';
import { GraphComponent } from './component/dashboard/component/graph/graph.component';
import { NgxChartModule } from 'ngx-chart';
import { ListUserComponent } from './component/dashboard/component/list-user/list-user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '', component: GraphComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: 'listUser', component: ListUserComponent },
    ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    GraphComponent,
    HeaderComponent,
    AddUserComponent,
    ListUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiModule,
    NgxChartModule,
  ]
})
export class DashboardModule { }
