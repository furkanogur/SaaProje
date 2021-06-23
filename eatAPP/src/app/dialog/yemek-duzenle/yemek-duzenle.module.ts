import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YemekDuzenlePageRoutingModule } from './yemek-duzenle-routing.module';

import { YemekDuzenlePage } from './yemek-duzenle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YemekDuzenlePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [YemekDuzenlePage]
})
export class YemekDuzenlePageModule {}
