import { YemekMalzeme } from './../models/YemekMalzeme';
import { YemekKategori } from './../models/YemekKategori';
import { Yemekler } from './../models/yemekler';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ServicesService } from './../services/services.service';
import { Malzemeler } from './../models/Malzemeler';
import { Component } from '@angular/core';
import { KategoriYemek } from '../models/KategoriYemek';
import { Sonuc } from '../models/sonuc';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  uyeId: string = localStorage.getItem("uyeId");
  frmGroup: FormGroup;
  kategoriler: KategoriYemek[];
  malzemeler: Malzemeler[];
  kategori: KategoriYemek;
  katYemekId: string;
  malzemeId: any;
  constructor(
    public service: ServicesService,
    public frmbuilder: FormBuilder,
  ) {
    this.frmGroup = new FormGroup({
      YemekAdi: new FormControl(),
      Tarif: new FormControl(),
      katYemekId: new FormControl(),
      malzemeId: new FormControl(),
    })
  }


  ngOnInit(): void {
    this.yemekKategoriListe()
    this.MalzemeListe()
  }


  YemekEkle(frmGroup) {
    var yemekler: Yemekler = new Yemekler();
    var yemekKategori: YemekKategori = new YemekKategori();
    var yemekMalzeme: YemekMalzeme = new YemekMalzeme();
    yemekler.YemekAdi = frmGroup.YemekAdi
    yemekler.Tarif = frmGroup.Tarif
    yemekler.YemekUyeId = this.uyeId
    this.katYemekId = frmGroup.katYemekId
    this.malzemeId = frmGroup.malzemeId
    if (yemekler) {
      this.service.YemekEkle(yemekler).subscribe((s: Sonuc) => {
        console.log(this.katYemekId)
        yemekKategori.Kategori_yemek_id = this.katYemekId
        yemekKategori.Yemek_id = s.id
        yemekMalzeme.Yemek_id = s.id
        yemekMalzeme.Malzeme_id = this.malzemeId
        yemekMalzeme.Birim = "0";
        yemekMalzeme.Miktar = "0";
        console.log(yemekMalzeme.Malzeme_id);
        console.log(this.malzemeId);
        this.service.YemekKategoriEkle(yemekKategori).subscribe((s: Sonuc) => {
          console.log(s);
        });
        this.malzemeId.forEach(element => {
          yemekMalzeme.Yemek_id = s.id
          yemekMalzeme.Malzeme_id = element
          yemekMalzeme.Birim = "0";
          yemekMalzeme.Miktar = "0";
          this.service.YemekMalzemeEkle(yemekMalzeme).subscribe((s: Sonuc) => {
            console.log(s);
          })
          console.log(element)
        })
      });
    }
  }

  yemekKategoriListe() {
    this.service.KatYemekListele().subscribe((d: any = KategoriYemek) => {
      this.kategoriler = d;
      console.log(d);
    })
  }

  MalzemeListe() {
    this.service.MalzemeleListele().subscribe((d: any = Malzemeler) => {
      this.malzemeler = d;
      console.log(d);
    })
  }




}

