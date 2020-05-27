import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Capitán America', 'Hulk', 'Iron Man', 'Thor', 'Spiderman'];
  constructor() { }

  ngOnInit() {
  }
  doReorder(event) {
    // console.log('Arrastrado de: ', event.detail.from, 'a ', event.detail.to);
    event.detail.complete();
  }
  onClick() {
    console.log(this.personajes);
  }

}
