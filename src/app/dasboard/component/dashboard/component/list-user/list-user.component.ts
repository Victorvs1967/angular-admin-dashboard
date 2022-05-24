import { Component } from '@angular/core';
import { UsersDataSource } from 'src/app/model/users-data-source';
import { AdminService } from 'src/app/service/admin.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListUserComponent {

  displayedColumns: string[] = [ 'username', 'email', 'firstName', 'lastName', 'onCreate' ];
  dataSource: any;
  expandedElement: User | null | undefined;

  constructor(admin: AdminService) {
    admin.getPersonList().subscribe(data => this.dataSource = new UsersDataSource([ ...data ]));
  }
}
