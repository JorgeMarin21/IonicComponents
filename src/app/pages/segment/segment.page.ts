import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes: Observable<any>;
  valorSegmento: string;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataservice.getHeroes();
  }

  segmentChanged(event) {
    this.valorSegmento = event.detail.value;
    if (this.valorSegmento === 'todos') {
      this.valorSegmento = '';
    }
    console.log(this.valorSegmento);
  }

}
