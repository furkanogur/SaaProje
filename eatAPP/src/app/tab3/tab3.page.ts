import { Sonuc } from './../models/sonuc';
import { Yemekler } from './../models/yemekler';
import { Favori } from './../models/Favori';
import { Uye } from './../models/Uye';
import { UyeFoto } from './../models/UyeFoto';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  secilenFoto: any;
sayi=1;
uye:Uye;
uyeId:string = localStorage.getItem("uyeId")
favori:Favori[];
favoriYemekId:string
yemekler:Yemekler;
favoriid:string;
islem:boolean=false;


  constructor(
    public servis:ServicesService,
    private menu: MenuController
  ) {}

ngOnInit(): void {
 this.uyeById();
 this.favoriListeById();
  
}

uyeById(){
  this.servis.UyeById(this.uyeId).subscribe((d:Uye)=>{
    this.uye = d;
    console.log(d)
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


}
