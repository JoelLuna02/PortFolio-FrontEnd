import { Component, OnInit } from '@angular/core';
import { Explaboral } from 'src/app/models/explaboral';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';
import { SExperienciaService } from 'src/app/servicio/sexperiencia.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  // Seccion de inicio de sesión
  isLogged = false;
  isAuth = false;
  isUser = false;
  resul: string[] = [];

  // Seccion de persona
  persona: persona = new persona('','','','',0,'','','');

  // Sección de trabajos 
  experiencia: Explaboral[] = [];
  totaltrab: number = this.experiencia.length;

  constructor(public servicio:PersonaService, 
              private tokenserv: TokenService, 
              private sexp: SExperienciaService) { }

  ngOnInit(): void {
    if(this.tokenserv.getToken()) {
      this.isLogged =true;
    } else {
      this.isLogged = false;
    }
    this.resul = this.tokenserv.getAuthorities();
    if (this.resul[1] == 'ROLE_ADMIN') {
      this.isAuth = true;
    } else {
      this.isUser = true;
    }
    /* Se extrae información de la base de datos del backend */ 
    this.servicio.getPersona().subscribe(data => (this.persona = data));
  
    this.sexp.listado().subscribe(data => {this.experiencia = data});
  }
  onDelJob(id?: number) {
    if (id != undefined) {
      this.sexp.delete(id).subscribe(data => {
        window.location.reload();
        this.sexp.listado().subscribe(data => {this.experiencia = data});
      }, err => {
        alert("Ocurrió un error al eliminar experiencia laboral.");
        window.location.reload();
      })
    }
  }
}