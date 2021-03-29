import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenoEmitter = new EventEmitter<boolean>();
  
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'deivide' && usuario.senha == '123') {

      this.usuarioAutenticado = true;

      this.mostrarMenoEmitter.emit(true);
      
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenoEmitter.emit(false);
    }

  }

}

