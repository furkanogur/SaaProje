import { AnasayfaComponent } from './../dialog/anasayfa/anasayfa.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab1Page
      }
    ])
  ],
  declarations: [Tab1Page,AnasayfaComponent],
  entryComponents: [AnasayfaComponent]
})
export class Tab1PageModule {}
