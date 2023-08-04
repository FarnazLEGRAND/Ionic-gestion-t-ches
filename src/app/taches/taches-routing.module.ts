import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TachesPage } from './taches.page';

const routes: Routes = [
  {
    path: '',
    component: TachesPage
  },
  {
    path: ':tacheId',
    loadChildren: () => import('./tache-item/tache-item.module').then( m => m.TacheItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TachesPageRoutingModule {}
