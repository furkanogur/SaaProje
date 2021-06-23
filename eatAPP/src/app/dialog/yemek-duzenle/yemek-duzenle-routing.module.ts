import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YemekDuzenlePage } from './yemek-duzenle.page';

const routes: Routes = [
  {
    path: '',
    component: YemekDuzenlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YemekDuzenlePageRoutingModule {}
