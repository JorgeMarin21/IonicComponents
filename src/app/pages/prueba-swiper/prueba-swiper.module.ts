import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaSwiperPageRoutingModule } from './prueba-swiper-routing.module';

import { PruebaSwiperPage } from './prueba-swiper.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaSwiperPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PruebaSwiperPage]
})
export class PruebaSwiperPageModule {}
