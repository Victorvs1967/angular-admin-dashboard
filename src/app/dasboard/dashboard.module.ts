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
import { SignupComponent } from '../auth/component/signup/signup.component';
import { ListProjectComponent } from './component/dashboard/component/list-project/list-project.component';
import { AddProjectComponent } from './component/dashboard/component/add-project/add-project.component';
import { ListSkillComponent } from './component/dashboard/component/list-skill/list-skill.component';
import { AddSkillComponent } from './component/dashboard/component/add-skill/add-skill.component';
import { AuthGuard } from '../guard/auth.guard';
import { EditProjectComponent } from './component/dashboard/component/edit-project/edit-project.component';
import { EditSkillComponent } from './component/dashboard/component/edit-skill/edit-skill.component';
import { AddImageComponent } from './component/dashboard/component/add-image/add-image.component';
import { ListImageComponent } from './component/dashboard/component/list-image/list-image.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canDeactivate: [AuthGuard],
    children: [
      { path: '', component: GraphComponent },
      { path: 'addUser', component: SignupComponent },
      { path: 'listUser', component: ListUserComponent },
      { path: 'editUser/:username', component: EditUserComponent },
      { path: 'addProject', component: AddProjectComponent },
      { path: 'listProject', component: ListProjectComponent },
      { path: 'editProject', component: EditProjectComponent },
      { path: 'addSkill', component: AddSkillComponent },
      { path: 'listSkill', component: ListSkillComponent },
      { path: 'editSkill', component: EditSkillComponent },
      { path: 'addImage', component: AddImageComponent },
      { path: 'listImage', component: ListImageComponent },
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
    ListProjectComponent,
    AddProjectComponent,
    ListSkillComponent,
    AddSkillComponent,
    EditProjectComponent,
    EditSkillComponent,
    AddImageComponent,
    ListImageComponent,
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
