import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-prueba-swiper',
  templateUrl: './prueba-swiper.page.html',
  styleUrls: ['./prueba-swiper.page.scss'],
})
export class PruebaSwiperPage implements OnInit {
 @ViewChild(IonSlides, {static: false}) slides: IonSlides;
  slideOpts: any = {
    initialSlide: 1,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      // dynamicBullets: true
    },
  };

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }
  prev() {
    this.slides.slidePrev();
  }

}
