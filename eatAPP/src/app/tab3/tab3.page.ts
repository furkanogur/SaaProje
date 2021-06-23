import { Sonuc } from './../models/sonuc';
import { Yemekler } from './../models/yemekler';
import { Favori } from './../models/Favori';
import { Uye } from './../models/Uye';
import { UyeFoto } from './../models/UyeFoto';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../services/services.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Malzemeler } from '../models/Malzemeler';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  secilenFoto: any;
  frmGroup: FormGroup;
  yeniUye:Uye;
sayi=1;
uye:Uye;
uyeId:string = localStorage.getItem("uyeId")
favori:Favori[];
favoriYemekId:string
yemekler:Yemekler;
favoriid:string;
islem:boolean=false;
yemek:Yemekler[];
malzemeduz:Malzemeler;


  constructor(
    public servis:ServicesService,
    public frmbuilder: FormBuilder,
    private menu: MenuController
  ) {}

ngOnInit(): void {
  this.frmGroup = new FormGroup({
    uyeSifre: new FormControl(),
    uyeAdSoyad: new FormControl()
  });



 this.uyeById();
 this.favoriListeById();
 this.YemekListe();
  
}
cikis(){
  localStorage.clear();
  location.href=("login");
}
uyesifre:string;
uyetel:string;
uyeById(){
  this.servis.UyeById(this.uyeId).subscribe((d:Uye)=>{
    this.uye = d;
  })
  
}



favoriListeById(){
  this.servis.FavoriByUyeId(this.uyeId).subscribe((d:Favori[])=>{
    this.favori=d;
  })
}



uyeFoto: UyeFoto = new UyeFoto();

  FotoSec(e) {
    var fotolar = e.target.files;
    var foto = fotolar[0];
    var fr = new FileReader();
    fr.onloadend = () => {
      this.secilenFoto = fr.result;
      this.uyeFoto.fotoData = fr.result.toString();
      this.uyeFoto.fotoUzanti = foto.type;
    };
    fr.readAsDataURL(foto);
  }


  FotoGuncelle(){
    this.uyeFoto.uyeId=this.uyeId
        this.servis.UyeFotoGuncelle(this.uyeFoto).subscribe((s:Sonuc)=>{
        if(s.islem==true){
          location.href=("hesabim")
        }
        })
  }

YemekListe(){
  this.servis.YemekByUyeId(this.uyeId).subscribe((d:Yemekler[])=>{
    this.yemek=d;
  })
}





SifreDuzenle(frmGroup) {
  var uye: Uye = new Uye();
  uye.uyeAdSoyad = this.uye.uyeAdSoyad
  uye.uyeEmail = this.uye.uyeEmail
  uye.uyeTelefon = this.uye.uyeTelefon
  uye.uyeSifre = frmGroup.uyeSifre
  uye.uyeId = this.uyeId
  this.servis.UyeDuzenle(uye).subscribe((s: Sonuc) => {
    if (s.islem) {
      this.uyeById();
           }
  })
}



AdSoyadDuzenle(frmGroup) {
  var uye: Uye = new Uye();
  uye.uyeAdSoyad = frmGroup.uyeAdSoyad
  uye.uyeEmail = this.uye.uyeEmail
  uye.uyeTelefon = this.uye.uyeTelefon
  uye.uyeSifre = this.uye.uyeSifre
  uye.uyeId = this.uyeId
  this.servis.UyeDuzenle(uye).subscribe((s: Sonuc) => {
    if (s.islem) {
      this.uyeById();
           }
  })
}

}
