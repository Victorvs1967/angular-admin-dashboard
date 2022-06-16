import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
// import { Skill } from 'src/app/model/skill.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  currentFile?: File;
  msg: any;
  createForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private admin: AdminService) { }

  ngOnInit(): void {
        this.createForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          description: ['', [Validators.required]],
          image: [''],
          // skills: [''],
          links: [''],
        });
  }

  submitProject() {
    const project: Project = this.createForm?.value;
    // project.skills = this.createForm?.value.skills.split(',').map((name: string) => name.trim());
    project.links = this.createForm?.value.links.split(',').map((link: string) => link.trim());
    project.image = this.currentFile?.name || '';

    this.admin.addProject(project).subscribe({
      next: () => {
        this.createForm?.reset();
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
    if (this.currentFile) this.admin.upload(this.currentFile).subscribe(response => {
      if (response instanceof HttpResponse) {
        this.msg = response.body;
        console.log(response.body);
      }
    });
  }
}
