import { KisidetayPage } from './../detay/kisidetay/kisidetay.page';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AppComponent } from '../app.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
