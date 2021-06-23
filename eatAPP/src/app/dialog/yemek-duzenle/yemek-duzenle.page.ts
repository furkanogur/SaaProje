import { Yemekler } from './../../models/yemekler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { ServicesService } from 'src/app/services/services.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-yemek-duzenle',
  templateUrl: './yemek-duzenle.page.html',
  styleUrls: ['./yemek-duzenle.page.scss'],
})
export class YemekDuzenlePage implements OnInit {
uyeid:string=localStorage.getItem("uyeId");
yemekId:string;
yemek:Yemekler;
frmGroup: FormGroup;
yeniYemek:Yemekler;
  constructor(public servis: ServicesService,
    public route: ActivatedRoute,
    public frmbuilder: FormBuilder,
) { }

  ngOnInit() {
    this.frmGroup = new FormGroup({
      YemekAdi: new FormControl(),
      Tarif: new FormControl(),
    });
    this.route.params.subscribe(p => {
      if (p) {
        this.yemekId=p.yemekId 
       console.log(this.yemekId)
       this.YemekListebyId(this.yemekId);
      }
      
    })
  }

  YemekSil() {
    this.servis.YemekSil( this.yemekId).subscribe((s: Sonuc) => {
      location.href = ("/");
    })
  }

  YemekListebyId(yemekId:string) {
    this.servis.YemekById(yemekId).subscribe((d: Yemekler) => {
      this.yemek = d;
      this.YemekDuzliste(this.yemek);
    })
  }




  Yemek(frmGroup) {
    var kayit: Yemekler = new Yemekler();
    kayit.YemekAdi = frmGroup.YemekAdi
    kayit.Tarif = frmGroup.Tarif
    kayit.yemekId =this.yemekId
    this.servis.YemekDuzenle(kayit).subscribe((s: Sonuc) => {
      if (s.islem) {
        location.href = ("/");
      }
      else{
      }
    })
  }

  YemekDuzliste(kayit: Yemekler) {
    this.yeniYemek = kayit;
    this.frmGroup = this.FormYemekOlustur();


  }
  FormYemekOlustur() {
    return this.frmbuilder.group({
      YemekAdi: [this.yeniYemek.YemekAdi],
      Tarif: [this.yeniYemek.Tarif],
    })
  }

}
