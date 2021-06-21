import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YemekdetayPageRoutingModule } from './yemekdetay-routing.module';

import { YemekdetayPage } from './yemekdetay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YemekdetayPageRoutingModule
  ],
  declarations: [YemekdetayPage]
})
export class YemekdetayPageModule {}
