import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  valor = 0;
  constructor() { }

  ngOnInit() {
  }

  rangeChange(event) {
    console.log(event);
    this.valor = (event.detail.value) / 100;
  }
}
