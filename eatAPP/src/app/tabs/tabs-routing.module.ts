import { AdminpanelPageModule } from './../Admin/adminpanel/adminpanel.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/AuthGuard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),

      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../Admin/adminpanel/adminpanel.module').then(m => m.AdminpanelPageModule),
        canActivate: [AuthGuard],
        data: {
          yetkiler: ["Admin"],
          gerigit: "/"
        }
      },
      {
        path: 'kisidetay',
        loadChildren: () => import('../detay/kisidetay/kisidetay.module').then(m => m.KisidetayPageModule)
      },
      {
        path: 'yemekdetay',
        loadChildren: () => import('../detay/yemekdetay/yemekdetay.module').then(m => m.YemekdetayPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
