import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaBase64PageRoutingModule } from './prueba-base64-routing.module';

import { PruebaBase64Page } from './prueba-base64.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaBase64PageRoutingModule,
    ComponentsModule
  ],
  declarations: [PruebaBase64Page]
})
export class PruebaBase64PageModule {}
