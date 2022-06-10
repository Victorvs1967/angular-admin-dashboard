import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

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
    // project.skills = this.createForm?.value.links.split(',').map((skill: string) => skill.trim());
    project.links = this.createForm?.value.links.split(',').map((link: string) => link.trim());

    this.admin.addProject(project).subscribe({
      next: () => {
        this.createForm?.reset();
        this.router.navigate(['/admin/listProject']);
      },
      error: err => alert(err.message)
    });
  }
}
