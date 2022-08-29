import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class SProyectosService {

  projurl = 'https://backendhjl.herokuapp.com/projects/';
  constructor(private httpclient: HttpClient) { }

  public listado(): Observable<Proyectos[]> {
    return this.httpclient.get<Proyectos[]>(this.projurl + 'listado');
  }
  public detail(id: number): Observable<Proyectos> {
    return this.httpclient.get<Proyectos>(this.projurl + `detail/${id}`);
  }
  public create(project: Proyectos): Observable<any> {
    return this.httpclient.post<any>(this.projurl + 'create', project);
  }
  public update(id: number, project: Proyectos): Observable<any> {
    return this.httpclient.put<any>(this.projurl + `update/${id}`, project);
  }
  public delete(id: number): Observable<any> {
    return this.httpclient.delete<any>(this.projurl + `delete/${id}`);
  }
}
