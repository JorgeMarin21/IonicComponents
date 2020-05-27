import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaSlidePage } from './prueba-slide.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaSlidePageRoutingModule {}
