import { AnasayfaComponent } from './dialog/anasayfa/anasayfa.component';
import { Tab3PageModule } from './tab3/tab3.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'app/:yemekid',
  //   loadChildren: () => import('./app.module').then(m => m.AppModule)
  // },
  {
    path: 'anasayfa1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'hesabim',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'anasayfa',
    loadChildren: () => import('./dialog/anasayfa/anasayfa.component').then( m => m.AnasayfaComponent)
  },
  {
    path: 'kisidetay',
    loadChildren: () => import('./detay/kisidetay/kisidetay.module').then( m => m.KisidetayPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
