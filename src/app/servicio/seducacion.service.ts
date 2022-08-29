import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class SeducacionService {
  urledu = 'https://backendhjl.herokuapp.com/edu/';
  constructor(private httpcliente: HttpClient) { }

  public listado(): Observable<Educacion[]> {
    return this.httpcliente.get<Educacion[]>(this.urledu+ 'lista');
  }
  public detail(id: number): Observable<Educacion> {
    return this.httpcliente.get<Educacion>(this.urledu + `detail/${id}`);
  }
  public create(edu: Educacion): Observable<any> {
    return this.httpcliente.post<any>(this.urledu + 'create', edu);
  }
  public update(id: number, edu: Educacion): Observable<any> {
    return this.httpcliente.put<any>(this.urledu + `update/${id}`, edu);
  }
  public delete(id: number): Observable<any> {
    return this.httpcliente.delete<any>(this.urledu + `delete/${id}`);
  }
}
