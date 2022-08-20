import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Explaboral } from '../models/explaboral';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expurl = 'http://localhost:8080/explab/';
  constructor(private httpcliente: HttpClient) { }

  public listado(): Observable<Explaboral[]> {
    return this.httpcliente.get<Explaboral[]>(this.expurl + 'lista');
  }
  public detail(id: number): Observable<Explaboral> {
    return this.httpcliente.get<Explaboral>(this.expurl + `detail/${id}`);
  }
  public create(experiencia: Explaboral): Observable<any> {
    return this.httpcliente.post<any>(this.expurl + "create", experiencia);
  }
  public update(id: number, experiencia: Explaboral): Observable<any> {
    return this.httpcliente.put<any>(this.expurl + `update/${id}`, experiencia);
  }
  public delete(id: number): Observable<any> {
    return this.httpcliente.delete<any>(this.expurl + `delete/${id}`);
  }
}
