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
  existeDados: boolean = false

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.dadosTimes = this.storageService.carregarDadosdoSession(this.storageChave)
    if(this.dadosTimes.length != 0){
      this.existeDados = true
    }
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
    //Refresh na página para atualizar o gráfico
    location.reload()
  }

}
