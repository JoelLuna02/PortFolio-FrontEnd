import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  autoridad: string[] = [];
  condicion!: string;
  usuario!: string;

  constructor(private token: TokenService, private router:Router, private auth:TokenService) { }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.autoridad = this.auth.getAuthorities();
    this.usuario = this.auth.getUserName();
    if (this.autoridad[1] == 'ROLE_ADMIN' && this.autoridad[0] == 'ROLE_USER'){
      this.condicion = "Administrador";
    } else {
      this.condicion = "Normal";
    }
  }

  onLogout(): void {
    this.token.logOut();
    window.location.reload();
  }
  sesion() {
    this.router.navigate(['/login']);
  }
}
