import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesPageRoutingModule } from './taches-routing.module';

import { TachesPage } from './taches.page';

import { SingleTacheComponent } from './single-tache/single-tache.component';
import { TacheItemPage } from './tache-item/tache-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesPageRoutingModule
  ],
  declarations: [TachesPage,SingleTacheComponent]
})
export class TachesPageModule {}
