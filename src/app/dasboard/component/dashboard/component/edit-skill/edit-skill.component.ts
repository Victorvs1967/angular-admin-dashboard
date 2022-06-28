import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit {

  project: Skill = {
    id: null,
    name: '',
    description: '',
    percent: 0
  };

  editForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private admin: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.admin.getSkill(param['id']).subscribe(skill => {
        console.log(skill);
        this.editForm = this.formBuilder.group({
          name: ['skill.name', [Validators.required]],
          description: ['skill.description', [Validators.required]],
          percent: ['skill.percent'],
        });
      })
    })
  }

  submitSkill() {
    const skill: Skill = this.editForm?.value;
    this.admin.editSkill(skill).subscribe({
      next: () => {
        this.editForm?.reset();
        this.router.navigate(['/admin/listSkill']);
      },
      error: err => alert(err.message)
    });
  }
}
