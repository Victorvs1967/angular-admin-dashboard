import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  // displayedColumns: string[] = [ "name", "image", "description", "skills", "links" ];
  displayedColumns: string[] = [ "name", "image", "description", "links" ];
  dataSource: any;
  expandedElement: Project | null | undefined;

  img?: string;

  constructor(private admin: AdminService, private router: Router) { 
    this.reloadData();
  }

  editProject(project: Project) {
    this.router.navigate(['/admin/editProject', project])
  }

  deleteProject(id: string) {
    if (confirm('Are you sure?')) {
      this.admin.deleteProject(id).subscribe(() => this.reloadData());
    }
  }

  reloadData() {
    this.admin.getProjectList().subscribe(data => this.dataSource = new ProjectsDataSource([...data]));
  }

  readImg(id: string) {
    this.admin.read(id).subscribe(res => this.insertImg(id, res));
  }

  insertImg(id: string, data: any) {
    const contentType = 'image/jpeg';
    const b64Data = data;
    const byteArray = new Uint8Array(b64Data);
    const blob = new Blob([byteArray], { type: contentType });
    const blobUrl = URL.createObjectURL(blob);

    const el = document.getElementById(id);
    if (!el?.querySelector('img')) {
      const img = document.createElement('img');
      img.classList.add('detail-image');
      img.src = blobUrl;
      img.style.width = '500px';
      img.style.height = 'auto';
      el ? el.appendChild(img) : '';
    }

  }

}
