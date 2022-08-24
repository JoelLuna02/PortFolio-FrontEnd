import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../models/educacion';
import { SeducacionService } from '../servicio/seducacion.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {
  nombreEdu: string = '';
  orientacionEdu: string = '';
  periodoEdu: number = 0;
  carreraEdu: string = '';
  estado: string = '';
  imagen: string = "";

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor(private sedu: SeducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  closeModal( $event: any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

  onCreate(): void {
    const edunew = new Educacion(this.nombreEdu,this.orientacionEdu,this.periodoEdu,this.carreraEdu,this.estado, this.imagen);
    this.sedu.create(edunew).subscribe(data => {
      alert('Datos educativos almacenados con éxito');
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert('Error en la creación');
      this.router.navigate(['']);
      window.location.reload();
    });
  }
}
