import { Component } from '@angular/core';
import { AuthService } from './autenticacao/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ld-shop';

  mostrarMenu: boolean = false;
  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.mostrarMenoEmitter.subscribe();

  }
}
