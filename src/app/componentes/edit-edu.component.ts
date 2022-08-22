import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../models/educacion';
import { SeducacionService } from '../servicio/seducacion.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  updateEdu : Educacion = null;

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor(private eduserv: SeducacionService,
              private activR: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activR.snapshot.params['id'];
    this.eduserv.detail(id).subscribe(data => {
      this.updateEdu = data;
    }, err => {
      alert('Error en la creación.');
      this.router.navigate(['']);
      window.location.reload();
    })
  }

  closeModal( $event: any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }


  onUpdateEdu(): void {
    const id = this.activR.snapshot.params['id'];
    this.eduserv.update(id, this.updateEdu).subscribe(data => {
      alert("Datos modificados con éxito");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert('Error en la creación.');
      this.router.navigate(['']);
      window.location.reload();
    })
  }
}
