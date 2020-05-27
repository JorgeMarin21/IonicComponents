import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-base64',
  templateUrl: './prueba-base64.page.html',
  styleUrls: ['./prueba-base64.page.scss'],
})
export class PruebaBase64Page implements OnInit {

  nombre: string;
  split: string[];
  tipo: string;
  base64: string;
  mostrar = false;
  constructor() { }

  ngOnInit() {

  }
  onSubmitTemplate() {
    console.log('formSubmit');
    this.split = this.nombre.split('-');
    this.tipo = this.split[0];
    this.base64 = this.split[1];
    this.mostrar = true;
  }
}
