import { Component, OnInit } from '@angular/core';
import { StorageService } from '../cadastro/add-time/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dadosTimes: Array<string> = []
  storageChave: string = 'times'

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.dadosTimes = this.storageService.carregarDadosdoSession(this.storageChave)
    console.log('Dados do Session Storage: ' + this.dadosTimes)
  }

}
