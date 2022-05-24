import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm?: FormGroup;
  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
    this.auth.onAdmin().subscribe(r => this.isAdmin = r);

    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: [''],
      lastName: [''],
      phone: [''],
      address: ['']
    });
  }

  submitSignup() {
    this.auth.signup(this.signupForm?.value).subscribe({
      next: () => {
        this.signupForm?.reset();
        this.isAdmin ? this.router.navigate(['/admin']) : this.router.navigate(['/home']);
      },
      error: err => alert(err.message)
    });
  }
}
