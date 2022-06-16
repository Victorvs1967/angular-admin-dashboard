import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';
import { Project } from '../model/project.model';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getUserList(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUrl.concat(environment.userUrl))
  }

  public getUser(username: string): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}${environment.userUrl}/${username}`);
  }

  public editUser(user: User): Observable<User> {
    return this.http.put<User>(environment.baseUrl.concat(environment.userUrl).concat('/').concat(user.username), user);
  }

  public deleteUser(username: string): Observable<void> {
    return this.http.delete<void>(environment.baseUrl.concat(environment.userUrl).concat('/').concat(username));
  }

  public getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.baseUrl.concat(environment.projectUrl));
  }

  public addProject(project: Project): Observable<any | boolean> {
    return this.http.post<any>(environment.baseUrl.concat(environment.projectUrl), project)
  }

  public deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(environment.baseUrl.concat(environment.projectUrl).concat('/').concat(id));
  }

  public getSkillList(): Observable<Skill[]> {
    return this.http.get<Skill[]>(environment.baseUrl.concat(environment.skillUrl));
  }

  public addSkill(skill: Skill): Observable<any | boolean> {
    return this.http.post(environment.baseUrl.concat(environment.skillUrl), skill)
  }

  public deleteSkill(id: string): Observable<void> {
    return this.http.delete<void>(environment.baseUrl.concat(environment.skillUrl).concat('/').concat(id));
  }

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.baseUrl.concat(environment.projectUrl).concat("/upload"), formData);
  }

  read(id: string): Observable<any> {
    return this.http.get(environment.baseUrl.concat(environment.projectUrl).concat('/read/').concat(id));
  }

}