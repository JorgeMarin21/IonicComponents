import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.dataServices.getAlbums().subscribe( albumes => {
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  onSearchChange(event) {
    this.textoBuscar = event.detail.value;
  }


}
