import { Takipci } from './../../models/Takipci';
import { YemekMalzeme } from './../../models/YemekMalzeme';
import { Uye } from './../../models/Uye';
import { Yemekler } from './../../models/yemekler';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Favori } from 'src/app/models/Favori';
import { Sonuc } from 'src/app/models/sonuc';
import { PopoverController } from '@ionic/angular';
import { AnasayfaComponent } from 'src/app/dialog/anasayfa/anasayfa.component';

@Component({
  selector: 'app-yemekdetay',
  templateUrl: './yemekdetay.page.html',
  styleUrls: ['./yemekdetay.page.scss'],
})
export class YemekdetayPage implements OnInit {
  yemek: Yemekler;
  durum: boolean = true;
  popoverData: any;
  yemekId: string;
  uyeid: string;
  uye: Uye;
  uyeid1: string;
  yemekmalzeme: YemekMalzeme[];
  duzuyeid: string = localStorage.getItem("uyeId")
  constructor(
    public servis: ServicesService,
    public route: ActivatedRoute,
    private popoverCtrl: PopoverController

  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p) {
        this.yemekId = p.yemekId,
          this.uyeid = p.uyeid,
          this.YemekListebyId();
        this.uyeGetir();
        this.YemekMalzemeListele();

      }
    })
  }

  TakiptenCık() {
    this.servis.TakipciSil(this.duzuyeid).subscribe((s: Sonuc) => {

    })
  }



  YemekMalzemeListele() {
    this.servis.YemekMalzemeyemekById(this.yemekId).subscribe((d: YemekMalzeme[]) => {
      this.yemekmalzeme = d;
    })
  }

  uyeGetir() {
    this.servis.UyeById(this.uyeid).subscribe((d: Uye) => {
      this.uye = d;
      this.uyeid1 = d.uyeId;

    })
  }
  takipet(YemekUyeId: string) {
    var takip: Takipci = new Takipci();
    takip.takipEdenUyeId = this.duzuyeid;
    takip.takipEdilenUyeId = YemekUyeId
    this.servis.TakipciEkle(takip).subscribe((s: Sonuc) => {
      if (s.islem==false) {
        this.TakiptenCık()
      }
    })
  }


  YemekListebyId() {
    this.servis.YemekById(this.yemekId).subscribe((d: Yemekler) => {
      this.yemek = d;
    })
  }

  FavoriEkle(yemekId: string) {
    var favori: Favori = new Favori();
    favori.favoriYemekId = yemekId
    favori.favoriUyeId = localStorage.getItem("uyeId");
    this.servis.FavoriEkle(favori).subscribe((s: Sonuc) => {
    })
  }



  async showPopover(event, yemekId: string) {
    const popover = await this.popoverCtrl.create({
      component: AnasayfaComponent,
      event: event,
      translucent: true,
      componentProps: { name: 'world', secyemekId: yemekId }
    });
    popover.onDidDismiss().then(popoverEvent => {
      this.popoverData = popoverEvent.data.popoverData;
    });
    await popover.present();
  }
}
