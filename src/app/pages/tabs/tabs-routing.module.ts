import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'account',
      // loadChildren: '../avatar/avatar.module#AvatarPageModule' ya no se usa
      loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
    }, {
      path: 'contact',
      // loadChildren: '../avatar/avatar.module#AvatarPageModule' ya no se usa
      loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
    }, {
      path: 'settings',
      // loadChildren: '../avatar/avatar.module#AvatarPageModule' ya no se usa
      loadChildren: () => import('../infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
