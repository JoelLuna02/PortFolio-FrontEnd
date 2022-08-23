import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../servicio/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  updatepersona : Persona = null;
  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router, private activateR: ActivatedRoute, private spers: PersonaService) { }

  ngOnInit(): void {
    const id = this.activateR.snapshot.params['id'];
    this.spers.detail(id).subscribe(data => {
      this.updatepersona = data;
    }, err => {
      alert("Error al cargar edición");
      this.closeModal({submitted: true});
      this.router.navigate(['']);
      window.location.reload();
    });
  }

  closeModal( $event: any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

  onUpdatePersona(): void {
    const id = this.activateR.snapshot.params['id'];
    this.spers.update(id, this.updatepersona).subscribe(data => {
      alert("Perfil editado con éxito");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Error al actualizar información");
      this.router.navigate(['']);
      window.location.reload();
    });
  }
}
