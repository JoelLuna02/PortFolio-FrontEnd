import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HSSkills } from '../models/hsskills';
import { SSkillsService } from '../servicio/sskills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string = "";
  porcentaje: number = 0;
  estilo: string = "";
  icono: string = "";

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor( private sskill: SSkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  closeModal( $event: any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

  onCreate(): void {
    const newskill = new HSSkills(this.nombre,this.porcentaje,this.estilo,this.icono);
    this.sskill.create(newskill).subscribe(data => {
      alert("Habilidad creada con éxito");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Error al crear habilidad.");
      this.router.navigate(['']);
      window.location.reload();
    });
  }
}
