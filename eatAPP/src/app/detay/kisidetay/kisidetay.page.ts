import { Yemekler } from './../../models/yemekler';
import { Uye } from './../../models/Uye';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kisidetay',
  templateUrl: './kisidetay.page.html',
  styleUrls: ['./kisidetay.page.scss'],
})
export class KisidetayPage implements OnInit {
  uye: Uye;
  uyeid: string;
  yemekler:Yemekler[];
  constructor(
    public servis: ServicesService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p) {
        this.uyeid = p.uyeid
        this.UyeGetir();
        this.YemekBilgi();
      }
    })
  }
  UyeGetir() {
    this.servis.UyeById(this.uyeid).subscribe((d: Uye) => {
      this.uye = d;    })
  }

  YemekBilgi(){
    this.servis.YemekByUyeId(this.uyeid).subscribe((d:Yemekler[])=>{
      this.yemekler =d;
    })
  }

}
