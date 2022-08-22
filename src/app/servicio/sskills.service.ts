import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HSSkills } from '../models/hsskills'

@Injectable({
  providedIn: 'root'
})
export class SSkillsService {
  urlskills = 'http://localhost:8080/skills/';
  constructor(private httpcli: HttpClient) { }

  public listado(): Observable<HSSkills[]> {
    return this.httpcli.get<HSSkills[]>(this.urlskills + 'listar');
  }
  public detail(id: number): Observable<HSSkills> {
    return this.httpcli.get<HSSkills>(this.urlskills + `detail/${id}`);
  }
  public create(skill: HSSkills): Observable<any> {
    return this.httpcli.post<any>(this.urlskills + 'create', skill);
  }
  public update(id: number, skill: HSSkills): Observable<any> {
    return this.httpcli.put<any>(this.urlskills + `update/${id}`, skill);
  }
  public delete(id: number): Observable<any> {
    return this.httpcli.delete<any>(this.urlskills + `delete/${id}`);
  }
}
