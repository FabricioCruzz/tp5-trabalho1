import { Component, OnInit, ViewChild } from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Time } from '../cadastro/add-time/time';
import { StorageService } from '../cadastro/add-time/storage.service';


@Component({
  selector: 'grafico-times',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  private dados: Array<Time> = []
  private nomes: Array<string> = []
  private qtdVotos: Array<number> = []
  private storageChave: string = 'times'

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  //Bar
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DatalabelsPlugin
  ]

  public barChartData: ChartData<'bar', number[], string> = {
    labels: this.nomes,
    datasets: [
      { data: this.qtdVotos, label: 'Time', backgroundColor: 'rgba(34, 87, 224, 0.75)', hoverBackgroundColor: 'rgba(21, 80, 198, 1)' }
    ]
  }


  constructor(private storageService: StorageService) { }
  ngOnInit(): void {
    this.dados = this.storageService.carregarDadosdoSession(this.storageChave)

    // Divide o array de times em arrays de nomes e votos para alimentar o gráfico
    this.nomes = this.geraArrayDeNomes(this.dados, this.nomes)
    this.qtdVotos = this.geraArrayDeQtdVotos(this.dados, this.qtdVotos)
  }

  geraArrayDeNomes(array: Array<Time>, listaDeNomes: Array<string>){
    array.forEach((element, index) => {
      listaDeNomes[index] = element.nome
    })

    return listaDeNomes
  }

  geraArrayDeQtdVotos(array: Array<Time>, listaQtdVotos: Array<number>){
    array.forEach((element, index) => {
      listaQtdVotos[index] = element.contadorVotos
    })

    return listaQtdVotos
  }

}
