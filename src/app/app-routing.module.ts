import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEduComponent } from './componentes/edit-edu.component';
import { EditExpLabComponent } from './componentes/edit-exp-lab.component';
import { EditPersonaComponent } from './componentes/edit-persona.component';
import { EditSkillComponent } from './componentes/edit-skill.component';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { NewEduComponent } from './componentes/new-edu.component';
import { NewExpLabComponent } from './componentes/new-exp-lab.component';
import { NewSkillComponent } from './componentes/new-skill.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'login', component: LoginComponent},
  {path:'newjob', component: NewExpLabComponent, outlet: 'modal'},
  {path:'editjob/:id', component: EditExpLabComponent, outlet: 'modal'},
  {path:'newedu', component: NewEduComponent, outlet: 'modal'},
  {path:'editedu/:id', component: EditEduComponent, outlet: 'modal'},
  {path:'newskill', component: NewSkillComponent, outlet: 'modal'},
  {path:'editskill/:id', component: EditSkillComponent, outlet: 'modal'},
  {path:'editperfil/:id', component: EditPersonaComponent, outlet: 'modal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
