import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.css']
})
export class AddTimeComponent implements OnInit {

  time: string = ''
  times: Array<string> = []
  storageChave: string = 'times'

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.times = this.storageService.carregarDadosdoSession(this.storageChave)
  }


  addTimeNaLista(){
    this.times.push(this.time)
    this.time = ''
    this.storageService.salvarDadosNoSession(this.storageChave, this.times)

    console.log('Array Local: ' + this.times)
    console.log('Session Storage: ' + sessionStorage.getItem(this.storageChave))
  }

}
