import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyectos } from '../models/proyectos';
import { SProyectosService } from '../servicio/sproyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  updateProyecto: Proyectos = null;
  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router, private activateR: ActivatedRoute, private sproj: SProyectosService) { }

  ngOnInit(): void {
    const id = this.activateR.snapshot.params['id'];
    this.sproj.detail(id).subscribe(data => {
      this.updateProyecto = data;
    }, err => {
      alert("Error al cargar información");
      this.closeModal({submitted: true});
      this.router.navigate(['']);
      window.location.reload();
    });
  }

  closeModal( $event: any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

  onUpdateProyecto(): void {
    const id = this.activateR.snapshot.params['id'];
    this.sproj.update(id, this.updateProyecto).subscribe(data => {
      alert("Datos actualizados con éxito");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Error al actualizar información");
      this.closeModal({submitted: true});
      this.router.navigate(['']);
      window.location.reload();
    });
  }
}

