import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaSlidePageRoutingModule } from './prueba-slide-routing.module';

import { PruebaSlidePage } from './prueba-slide.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaSlidePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PruebaSlidePage]
})
export class PruebaSlidePageModule {}
