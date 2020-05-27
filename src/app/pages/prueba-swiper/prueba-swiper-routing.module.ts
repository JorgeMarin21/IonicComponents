import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaSwiperPage } from './prueba-swiper.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaSwiperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaSwiperPageRoutingModule {}
