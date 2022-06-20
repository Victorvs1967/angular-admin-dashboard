import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  currentFile?: File;
  imgId?: string;
  editForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private admin: AdminService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.admin.getProject(param['id']).subscribe(project => {
        this.editForm = this.formBuilder.group({
          name: [project.name, [Validators.required]],
          description: [project.description, [Validators.required]],
          image: [project.image],
          // skills: [project.skills],
          links: [project.links.toString()],
          id: [project.id],
          imgId: [project.imgId]
        });
      })
    })
  }

  submitProject() {
    const project: Project = this.editForm?.value;
      // project.skills = this.editForm?.value.skills.split(',').map((name: string) => name.trim());
      project.links = this.editForm?.value.links.split(',').map((link: string) => link.trim());
      project.image = this.currentFile?.name || project.image;
      project.imgId = this.imgId || project.imgId;
      
      this.admin.editProject(project).subscribe({
        next: () => {
          this.editForm?.reset();
          this.router.navigate(['/admin/listProject']);
        },
        error: err => alert(err.message)
      });
  }

  selectFile(event: any) {
    this.currentFile = event.target.files[0];
  }

  upload(event: any) {
    event.preventDefault();
    if (this.currentFile) this.admin.upload(this.currentFile).subscribe(response => this.imgId = response.id);
  }

}
