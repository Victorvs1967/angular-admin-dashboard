import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { HeaderComponent } from './component/header/header.component';
import { GraphComponent } from './component/dashboard/component/graph/graph.component';
import { NgxChartModule } from 'ngx-chart';
import { ListUserComponent } from './component/dashboard/component/list-user/list-user.component';
import { EditUserComponent } from './component/dashboard/component/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '', component: GraphComponent },
      { path: 'listUser', component: ListUserComponent },
      { path: 'editUser/:username', component: EditUserComponent },
    ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    GraphComponent,
    HeaderComponent,
    ListUserComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiModule,
    NgxChartModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
