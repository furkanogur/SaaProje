import { Sonuc } from './../models/sonuc';
import { Component } from '@angular/core';
import { Favori } from '../models/Favori';
import { Uye } from '../models/Uye';
import { Yemekler } from '../models/yemekler';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  uye: Uye[];
  yemek: Yemekler[];
  favori: Favori;
  secYemekId: string;
  favoriYemekId: string;
  constructor(
    public service: ServicesService
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

}
