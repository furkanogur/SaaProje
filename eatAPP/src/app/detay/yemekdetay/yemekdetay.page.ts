import { Uye } from './../../models/Uye';
import { Yemekler } from './../../models/yemekler';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Favori } from 'src/app/models/Favori';
import { Sonuc } from 'src/app/models/sonuc';

@Component({
  selector: 'app-yemekdetay',
  templateUrl: './yemekdetay.page.html',
  styleUrls: ['./yemekdetay.page.scss'],
})
export class YemekdetayPage implements OnInit {
  yemek: Yemekler;
  yemekId: string;
  uyeid:string;
  uye:Uye;
  uyeid1:string;
  constructor(
    public servis: ServicesService,
    public route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p) {
        this.yemekId = p.yemekId,
        this.uyeid = p.uyeid,
        this.YemekListebyId();
        this.uyeGetir();
      }
    })
  }

  uyeGetir(){
    this.servis.UyeById(this.uyeid).subscribe((d:Uye)=>{
      this.uye =d;
      this.uyeid1=d.uyeId;

    })
  }


  YemekListebyId() {
    this.servis.YemekById(this.yemekId).subscribe((d: Yemekler) => {
      this.yemek = d;
    })
  }

  FavoriEkle(yemekId: string) {
    console.log(yemekId)
    var favori: Favori = new Favori();
    favori.favoriYemekId = yemekId
    favori.favoriUyeId = localStorage.getItem("uyeId");
    this.servis.FavoriEkle(favori).subscribe((s: Sonuc) => {
      console.log(s);
    })
  }
}
