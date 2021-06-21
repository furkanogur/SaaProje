import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KisidetayPage } from '../kisidetay/kisidetay.page';

import { YemekdetayPage } from './yemekdetay.page';

const routes: Routes = [
  {
    path: '',
    component: YemekdetayPage
  },
  {
    path: 'kisidetay/:uyeid',
    component: KisidetayPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YemekdetayPageRoutingModule {}
