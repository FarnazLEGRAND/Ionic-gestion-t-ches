import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TacheItemPage } from './tache-item.page';

const routes: Routes = [
  {
    path: '',
    component: TacheItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TacheItemPageRoutingModule {}
