import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { NewExpLabComponent } from './componentes/new-exp-lab.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'login', component: LoginComponent},
  {path:'newjob', component: NewExpLabComponent, outlet: 'modal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
