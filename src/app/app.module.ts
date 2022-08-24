import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExpLabComponent } from './componentes/new-exp-lab.component';
import { NewSkillComponent } from './componentes/new-skill.component';
import { NewEduComponent } from './componentes/new-edu.component';
import { EditSkillComponent } from './componentes/edit-skill.component';
import { EditPersonaComponent } from './componentes/edit-persona.component';
import { EditExpLabComponent } from './componentes/edit-exp-lab.component';
import { EditEduComponent } from './componentes/edit-edu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule }  from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    NewExpLabComponent,
    EditExpLabComponent,
    NewEduComponent,
    EditEduComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
