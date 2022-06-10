import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsDataSource } from 'src/app/model/projects-data-source';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', padding: '0', margin: '0' })),
      state('expanded', style({ height: '*', margin: '*' })),
      transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListProjectComponent {

  displayedColumns: string[] = [ "name", "image", "description", "links" ];
  dataSource: any;
  expandedElement: Project | null | undefined;

  constructor(private admin: AdminService) { 
    this.reloadData();
  }

  deleteProject(id: string) {
    if (confirm('Are you sure?')) {
      this.admin.deleteProject(id).subscribe(() => this.reloadData());
    }
  }

  reloadData() {
    this.admin.getProjectList().subscribe(data => this.dataSource = new ProjectsDataSource([...data]));
  }

}
