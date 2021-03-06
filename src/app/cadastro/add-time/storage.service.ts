import { Injectable } from '@angular/core';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: any
  private listaTimes: Array<Time> = []

  constructor() { }

  carregarDadosdoSession(chave: string){

    this.storage = sessionStorage.getItem(chave)
    if(this.storage) {
      this.listaTimes = JSON.parse(this.storage)
    }
    return this.listaTimes
  }

  salvarDadosNoSession(chave: string, dados: any){
    sessionStorage.setItem(chave, JSON.stringify(dados))
  }

}
