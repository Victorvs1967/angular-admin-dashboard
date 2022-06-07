import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactsComponent } from './component/contacts/contacts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ProjectsComponent,
    BlogsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiModule,
  ]
})
export class HomeModule { }
