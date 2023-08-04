import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TacheItemPageRoutingModule } from './tache-item-routing.module';

import { TacheItemPage } from './tache-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TacheItemPageRoutingModule
  ],
  declarations: [TacheItemPage]
})
export class TacheItemPageModule {}
