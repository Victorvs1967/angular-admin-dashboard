import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
    this.isAdmin = this.auth.isAdmin;

    this.isAdmin.subscribe(isAdmin => console.log(isAdmin));
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.auth.logout();
  }

}
