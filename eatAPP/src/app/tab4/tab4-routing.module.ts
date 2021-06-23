import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YemekdetayPage } from '../detay/yemekdetay/yemekdetay.page';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'yemekdetay/:yemekId/:uyeid',
    component: YemekdetayPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
