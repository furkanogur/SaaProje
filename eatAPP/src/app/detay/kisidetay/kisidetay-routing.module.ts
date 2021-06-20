import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KisidetayPage } from './kisidetay.page';

const routes: Routes = [
  {
    path: '',
    component: KisidetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KisidetayPageRoutingModule {}
