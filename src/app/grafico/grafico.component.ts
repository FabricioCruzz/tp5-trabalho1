import { Component, OnInit, ViewChild } from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Time } from '../cadastro/add-time/time';
import { StorageService } from '../cadastro/add-time/storage.service';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  private dados: Array<Time> = []
  private nomes: Array<string> = []
  private qtdVotos: Array<number> = []
  private storageChave: string = 'times'

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string> = {
    labels: this.nomes,
    datasets: [ {
      data: this.qtdVotos
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];


  constructor(private storageService: StorageService) { }
  ngOnInit(): void {
    this.dados = this.storageService.carregarDadosdoSession(this.storageChave)

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
