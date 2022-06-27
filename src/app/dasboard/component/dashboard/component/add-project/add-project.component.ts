import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project.model';
import { Skill } from 'src/app/model/skill.model';
// import { Skill } from 'src/app/model/skill.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  image = { id: '', name: '' }
  skills: Skill[] = []
  project: Project = {
    id: null,
    name: '',
    description: '',
    image: this.image,
    skills: [],
    links: [],
  };

  currentFile?: File;
  createForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private admin: AdminService) { 
    admin.getSkillList().subscribe(data => {
      this.skills = [...data];
    });
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [this.image],
      skills: [ this.getSkills() ],
      links: [''],
    });
}

  submitProject() {
    this.project.name = this.createForm?.value.name;
    this.project.description = this.createForm?.value.description;
    this.project.skills = this.createForm?.value.skills;
    this.project.links = this.createForm?.value.links.split(',').map((link: string) => link.trim());
    this.project.image = this.image;

    this.admin.addProject(this.project).subscribe({
      next: () => {
        this.createForm?.reset();
        this.router.navigate(['/admin/listProject']);
      },
      error: err => alert(err.message)
    });
  }  

  selectFile(event: any) {
    this.currentFile = event.target.files[0];
    if (this.currentFile) this.image.name = this.currentFile.name;
  }

  upload(event: any) {
    event.preventDefault();
    if (this.currentFile) this.admin.upload(this.currentFile).subscribe(response => this.image.id = response.id);
  }

  getSkills(): string[] {
    let skills: string[] = [];
    this.skills?.forEach(skill => skills = [ ...skills, skill.name]);
    return skills;
  }
}
