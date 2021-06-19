import { Favori } from './../models/Favori';
import { Uye } from './../models/Uye';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
sayi=1;
uye:Uye;
uyeId:string = localStorage.getItem("uyeId")
favori:Favori[];


  constructor(
    public servis:ServicesService
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
  this.servis.FavoriByUyeId(this.uyeId).subscribe((d:any =Favori)=>{
    this.favori = d;
    console.log(d)
  })
}
}
