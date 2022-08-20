import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Explaboral } from '../models/explaboral';
import { SExperienciaService } from '../servicio/sexperiencia.service';

@Component({
  selector: 'app-edit-exp-lab',
  templateUrl: './edit-exp-lab.component.html',
  styleUrls: ['./edit-exp-lab.component.css']
})
export class EditExpLabComponent implements OnInit {

  updateExp: Explaboral = null;

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor(private expservice: SExperienciaService, 
              private activateR: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activateR.snapshot.params['id'];
    this.expservice.detail(id).subscribe(data => {
      this.updateExp = data;
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
  
  onUpdateExp(): void {
    const id = this.activateR.snapshot.params['id'];
    this.expservice.update(id, this.updateExp).subscribe(data => {
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
