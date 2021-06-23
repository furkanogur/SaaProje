import { YemekDuzenlePage } from './../dialog/yemek-duzenle/yemek-duzenle.page';
import { KisidetayPage } from './../detay/kisidetay/kisidetay.page';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AppComponent } from '../app.component';
import { YemekdetayPage } from '../detay/yemekdetay/yemekdetay.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'app/:yemekid',
    component: AppComponent,
  },
  {
    path: 'kisidetay/:uyeid',
    component: KisidetayPage,
  },
  {
    path: 'yemekdetay/:yemekId/:uyeid',
    component: YemekdetayPage,
  },
  {
    path: 'yemek-duzenle/:yemekId',
    component: YemekDuzenlePage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
