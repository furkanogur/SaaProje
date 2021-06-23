import { Sonuc } from './../models/sonuc';
import { UrunFoto } from './../models/UrunFoto';
import { YemekMalzeme } from './../models/YemekMalzeme';
import { YemekKategori } from './../models/YemekKategori';
import { Yemekler } from './../models/yemekler';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ServicesService } from './../services/services.service';
import { Malzemeler } from './../models/Malzemeler';
import { Component } from '@angular/core';
import { KategoriYemek } from '../models/KategoriYemek';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  secilenFoto: any;
  uyeId: string = localStorage.getItem("uyeId");
  frmGroup: FormGroup;
  kategoriler: KategoriYemek[];
  malzemeler: Malzemeler[];
  kategori: KategoriYemek;
  katYemekId: any;
  malzemeId: any;
  yemekıd:string;

  constructor(
    public service: ServicesService,
    public frmbuilder: FormBuilder,
    public alertController: AlertController
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
        yemekKategori.Kategori_yemek_id = this.katYemekId
        yemekKategori.Yemek_id = s.id
        yemekMalzeme.Yemek_id = s.id
        this.yemekıd=s.id;
        yemekMalzeme.Malzeme_id = this.malzemeId
        yemekMalzeme.Birim = "0";
        yemekMalzeme.Miktar = "0";
        this.katYemekId.forEach(element => {
          yemekKategori.Kategori_yemek_id = element
          yemekKategori.Yemek_id = s.id
          this.service.YemekKategoriEkle(yemekKategori).subscribe((s: Sonuc) => {
          });
        });
        this.malzemeId.forEach(element => {
          yemekMalzeme.Yemek_id = s.id
          yemekMalzeme.Malzeme_id = element
          yemekMalzeme.Birim = "0";
          yemekMalzeme.Miktar = "0";
          this.service.YemekMalzemeEkle(yemekMalzeme).subscribe((s: Sonuc) => {
          })
        })
        this.urunFoto.yemekId=this.yemekıd
        this.service.YemekFotoGuncelle(this.urunFoto).subscribe(async (s:Sonuc)=>{
          
          
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Yemek Eklendi !',
              message: '<strong>Teşekkür ederiz :)</strong>',
              buttons: [  
                 {
                  text: 'Tamam',
                  handler: () => {
                    location.href=("/");
                  }
                }
              ]
            });
        
            await alert.present();
          


        })
      });
    }
  }

  yemekKategoriListe() {
    this.service.KatYemekListele().subscribe((d: any = KategoriYemek) => {
      this.kategoriler = d;
    })
  }

  MalzemeListe() {
    this.service.MalzemeleListele().subscribe((d: any = Malzemeler) => {
      this.malzemeler = d;
    })
  }
 urunFoto: UrunFoto = new UrunFoto();
  FotoSec(e) {
    var fotolar = e.target.files;
    var foto = fotolar[0];
    var fr = new FileReader();
    fr.onloadend = () => {
      this.secilenFoto = fr.result;
      this.urunFoto.fotoData = fr.result.toString();
      this.urunFoto.fotoUzanti = foto.type;
    };
    fr.readAsDataURL(foto);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}

