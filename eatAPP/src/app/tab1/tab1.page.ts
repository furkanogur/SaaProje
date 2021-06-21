import { AnasayfaComponent } from './../dialog/anasayfa/anasayfa.component';

import { Sonuc } from './../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { Favori } from '../models/Favori';
import { Uye } from '../models/Uye';
import { Yemekler } from '../models/yemekler';
import { ServicesService } from '../services/services.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  popoverData:any;
  uye: Uye[];
  yemek: Yemekler[];
  favori: Favori;
  secYemekId: string;
  favoriYemekId: string;
  uyeid:string
  constructor(
    public service: ServicesService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit(): void {
    this.UyeListe();
    this.YemekListe();
    console.log()
  }



  UyeListe() {
    this.service.UyeListele().subscribe((d: Uye[]) => {
      this.uye = d;
    })
  }

  YemekListe() {
    this.service.YemekListele().subscribe((d: Yemekler[]) => {
      this.yemek = d;
      console.log(d)
    })
  }

  FavoriEkle(yemekId: string) {
    console.log(yemekId)
    var favori: Favori = new Favori();
    favori.favoriYemekId = yemekId
    favori.favoriUyeId = localStorage.getItem("uyeId");
    this.service.FavoriEkle(favori).subscribe((s: Sonuc) => {
      console.log(s);
    })
  }

  async showPopover(event,yemekId:string) {
    const popover = await this.popoverCtrl.create({
      component: AnasayfaComponent,
      event: event,
      translucent: true,
      componentProps: { name: 'world',secyemekId: yemekId}
    });
    console.log(yemekId);
    popover.onDidDismiss().then(popoverEvent => {
      this.popoverData = popoverEvent.data.popoverData;
    });
    await popover.present();
    console.log(this.popoverData);
  }
}
