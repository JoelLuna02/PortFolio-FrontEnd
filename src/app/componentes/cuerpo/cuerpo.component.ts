import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { Explaboral } from 'src/app/models/explaboral';
import { HSSkills } from 'src/app/models/hsskills';
import { Persona } from '../../models/persona';
import { PersonaService } from 'src/app/servicio/persona.service';
import { SeducacionService } from 'src/app/servicio/seducacion.service';
import { SExperienciaService } from 'src/app/servicio/sexperiencia.service';
import { SSkillsService } from 'src/app/servicio/sskills.service';
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
  persona: Persona = null;

  // Sección de trabajos 
  experiencia: Explaboral[] = [];
  educacion: Educacion[] = [];
  habilidades: HSSkills[] = [];

  constructor(private servicio:PersonaService, 
              private tokenserv: TokenService, 
              private sexp: SExperienciaService,
              private sedu: SeducacionService,
              private sskill: SSkillsService) { }

  ngOnInit(): void {
    if(this.tokenserv.getToken()) {
      this.isLogged =true;
    } else {
      this.isLogged = false;
    }
    this.resul = this.tokenserv.getAuthorities();
    if (this.resul[1] == 'ROLE_ADMIN' && this.resul[0] == 'ROLE_USER') {
      this.isAuth = true;
    } else {
      this.isUser = true;
    }

    /* Se extrae información de la base de datos al frontend */ 
    this.servicio.detail(1).subscribe(data => (this.persona = data));
    this.sexp.listado().subscribe(data => {this.experiencia = data});
    this.sedu.listado().subscribe(data => {this.educacion = data});
    this.sskill.listado().subscribe(data => {this.habilidades = data});
    
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
  onDelEdu(id?: number) {
    if (id != undefined) {
      this.sedu.delete(id).subscribe(data => {
        window.location.reload();
        this.sedu.listado().subscribe(data => {this.educacion = data});
      }, err => {
        alert("Ocurrió un error al eliminar información educativa.");
        window.location.reload();
      });
    }
  }
  onDelSkill(id?: number) {
    if (id != undefined) {
      this.sskill.delete(id).subscribe(data => {
        window.location.reload();
        this.sskill.listado().subscribe(data => {this.habilidades = data});
      }, err => {
        alert("Ocurrió un error al eliminar habilidad.");
        window.location.reload();
      });
    }
  }
}