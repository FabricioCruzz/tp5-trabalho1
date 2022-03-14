import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  constructor(private router:Router) { }

  doLogin(user: User){
    if(user.userEmail === 'admin@mail.com' &&
      user.userPassword === 'admin'){
        this.usuarioAutenticado = true
        this.router.navigate(['/cadastro'])
      }
    else{
      alert('Usuário/Senha está incorreto!\nPor favor, tente novamente!')
      this.usuarioAutenticado = false
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }

}
