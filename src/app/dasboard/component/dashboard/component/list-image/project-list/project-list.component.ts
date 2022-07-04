import { Component, Input } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Project } from 'src/app/model/project.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  projects: Project[] = []

  constructor(private _bottomSheetRef: MatBottomSheetRef<ProjectListComponent>, private admin: AdminService) {
    this.admin.getProjectList().subscribe(data => data.forEach(project => this.projects = [ ...this.projects, project ]));
  }

  toProject(id: string): void {
    const image = this._bottomSheetRef.containerInstance.bottomSheetConfig.data.image;
    this.admin.getProject(id).subscribe(project => {
      project.image = image;
      this.admin.editProject(project).subscribe({
        next: () => {
          console.log(project);
        },
        error: err => alert(err.message)
      });
    });
    this._bottomSheetRef.dismiss();
  }
}
