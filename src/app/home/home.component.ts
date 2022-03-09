import { Component, OnInit } from '@angular/core';
import { StorageService } from '../cadastro/add-time/storage.service';
import { Time } from '../cadastro/add-time/time';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dadosTimes: Array<Time> = []
  storageChave: string = 'times'

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.dadosTimes = this.storageService.carregarDadosdoSession(this.storageChave)
    console.log('Dados do Session Storage: ' + this.dadosTimes)
  }

  contabilizaVotos(time: string){

    // Realiza busca pelo time votado no array de times
    this.dadosTimes.forEach(element => {
      if(time === element.nome){
        element.contadorVotos++
      }
    });

    // Atualiza os dados de votos dos times
    this.storageService.salvarDadosNoSession(this.storageChave, this.dadosTimes)

    // this.dadosTimes.forEach(element => {
    //   console.log('Nome Time: ' + element.nome + '\n' + 'Votos: ' + element.contadorVotos)

    // });
    // console.log('Teste: ' + time)
  }

}
