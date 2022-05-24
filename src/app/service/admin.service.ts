import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getPersonList() {
    return this.http.get<User[]>(environment.baseUrl.concat(environment.apiUrl))
  }

  public getPerson(username: string) {
    return this.http.get<User>(`${environment.baseUrl}${environment.apiUrl}/${username}`);
  }


}