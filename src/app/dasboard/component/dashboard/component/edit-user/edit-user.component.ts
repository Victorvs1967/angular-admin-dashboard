import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  editForm?: FormGroup;
  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router, private admin: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.admin.getUser(param['username']).subscribe(user => {
        this.editForm = this.formBuilder.group({
          username: [user.username, [Validators.required]],
          email: [user.email, [Validators.required, Validators.email]],
          firstName: [user.firstName],
          lastName: [user.lastName],
          phone: [user.phone],
          address: [user.address]
        });
      });
    });
  }

  submitEdit() {
    this.admin.editUser(this.editForm?.value).subscribe({
      next: () => {
        this.editForm?.reset();
        this.router.navigate(['/admin/listUser']);
      },
      error: err => alert(err.message)
    });
  }
}
