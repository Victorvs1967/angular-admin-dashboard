import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getUserList(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUrl.concat(environment.apiUrl))
  }

  public getUser(username: string): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}${environment.apiUrl}/${username}`);
  }

  public editUser(user: User): Observable<User> {
    return this.http.put<User>(environment.baseUrl.concat(environment.apiUrl).concat('/').concat(user.username), user);
  }

  public deleteUser(username: string): Observable<void> {
    return this.http.delete<void>(environment.baseUrl.concat(environment.apiUrl).concat('/').concat(username));
  }

}