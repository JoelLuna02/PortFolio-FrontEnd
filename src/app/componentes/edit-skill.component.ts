import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HSSkills } from '../models/hsskills';
import { SSkillsService } from '../servicio/sskills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  updateSkill : HSSkills = null;
  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
  constructor(private activateR: ActivatedRoute, 
              private router: Router,
              private sskills: SSkillsService) { }

  ngOnInit(): void {
    const id = this.activateR.snapshot.params['id'];
    this.sskills.detail(id).subscribe(data => {
      this.updateSkill = data;
    }, err => {
      alert("Error al cargar edición");
      this.router.navigate(['']);
      window.location.reload();
    })
  }
  closeModal( $event: any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }
  onUpdateSkill(): void {
    const id = this.activateR.snapshot.params['id'];
    this.sskills.update(id, this.updateSkill).subscribe(data => {
      alert("Habilidad modificada con éxito");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert('Error en la modificación');
      this.router.navigate(['']);
      window.location.reload();
    })
  }

}
