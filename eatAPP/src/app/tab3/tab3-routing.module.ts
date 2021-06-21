import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { YemekdetayPage } from '../detay/yemekdetay/yemekdetay.page';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: 'yemekdetay/:yemekId/:uyeid',
    component: YemekdetayPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
