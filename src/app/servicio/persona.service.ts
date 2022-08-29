import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://backendhjl.herokuapp.com/personas/';

  constructor(private http: HttpClient) { }
  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL + 'perfil');
  }
  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL + `detail/${id}`);
  }
  public create(persona: Persona): Observable<any> {
    return this.http.post<any>(this.URL + 'create', persona);
  }
  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, persona);
  }
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `delete/${id}`);
  } 
}
