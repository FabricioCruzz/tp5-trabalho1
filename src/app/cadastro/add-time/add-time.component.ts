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

  time: Time = new Time()

  times: Array<Time> = []
  storageChave: string = 'times'

  timeJaExiste: boolean = false

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {

    // Atualiza o array local com os dados do Session Storage
    this.times = this.storageService.carregarDadosdoSession(this.storageChave)
  }


  addTimeNaLista(){
    this.time = new Time()
    this.time.nome = this.nomeTime
    this.time.contadorVotos = 0

    this.timeJaExiste = false

    // Verfica se não há tentativa de se criar time de nomes iguais
    // Caso seja o caso, ele não é adicionado para não duplicar dados
    this.verificaExistenciaDeTimeNoArray()
    if(!this.timeJaExiste){
      this.times.push(this.time)
      this.storageService.salvarDadosNoSession(this.storageChave, this.times)
    }

    this.nomeTime =''
  }

  verificaExistenciaDeTimeNoArray(){
    this.times.forEach(element => {
      if(this.nomeTime === element.nome){
        this.timeJaExiste = true
      }
    })
  }

}
