import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';
import { Time } from './time';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.css']
})
export class AddTimeComponent implements OnInit {

  nomeTime: string = ''
  contadorVotosTime: number = 0

  time: Time = {
    nome: '',
    contadorVotos: 0
  }

  times: Array<Time> = []
  storageChave: string = 'times'

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.times = this.storageService.carregarDadosdoSession(this.storageChave)
    console.log('Array de Times no Init: ' + this.times)
  }


  addTimeNaLista(){
    this.time = new Time()
    this.time.nome = this.nomeTime
    this.time.contadorVotos = 0

    this.times.push(this.time)

    this.storageService.salvarDadosNoSession(this.storageChave, this.times)

    this.nomeTime =''

    console.log('Array Local: ' + this.times)
    console.log('Session Storage: ' + sessionStorage.getItem(this.storageChave))
  }

}
