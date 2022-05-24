import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() taggledEvent: any = new EventEmitter();

  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  isUser: string | undefined;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLogin = this.auth.isLoggedIn;
    this.isAdmin = this.auth.isAdmin;

    this.isAdmin.subscribe(isAdmin => console.log(isAdmin));
  }

  login() {
    this.router.navigate(['/auth/login']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }

  taggledAction() {
    this.taggledEvent.emit('');
  }

  info() {
    console.log(this.auth.getUser());
  }

}
