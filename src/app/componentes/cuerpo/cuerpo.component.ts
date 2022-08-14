import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  persona: persona = new persona('','','','',0,'','','');

  constructor(public servicio:PersonaService) { }

  ngOnInit(): void {
    /* Se extrae información de la base de datos del backend */ 
    this.servicio.getPersona().subscribe(data => (this.persona = data));
  }
}
