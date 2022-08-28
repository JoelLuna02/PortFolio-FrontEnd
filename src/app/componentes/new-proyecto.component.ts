import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../models/proyectos';
import { SProyectosService } from '../servicio/sproyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string = "";
  fecha: string = "";
  descripcion: string = "";
  link: string = "";
  imagen: string = "";

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router, private sproj: SProyectosService) { }

  ngOnInit(): void {
  }

  closeModal( $event: any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

  onCreate(): void {
    const newproj = new Proyectos(this.nombre, this.fecha, this.descripcion, this.link, this.imagen);
    this.sproj.create(newproj).subscribe(data => {
      alert("Proyecto creado con éxito");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Error al crear Proyecto");
      this.router.navigate(['']);
      window.location.reload();
    });
  }
}
