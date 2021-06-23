import { YemekKategori } from './../../models/YemekKategori';
import { Sonuc } from './../../models/sonuc';
import { KategoriMalzeme } from './../../models/KategoriMalzeme';
import { Malzemeler } from './../../models/Malzemeler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { AlertController, PopoverController } from '@ionic/angular';
import { KategoriYemek } from 'src/app/models/KategoriYemek';
import { Yemekler } from 'src/app/models/yemekler';
import { Uye } from 'src/app/models/Uye';
import { AnasayfaComponent } from 'src/app/dialog/anasayfa/anasayfa.component';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.page.html',
  styleUrls: ['./adminpanel.page.scss'],
})
export class AdminpanelPage implements OnInit {
  islem: number = 0;
  frmGroup: FormGroup;
  malzemeler: Malzemeler;
  malkat:KategoriMalzeme[]
  katyem:KategoriYemek[]

  yemek: Yemekler[];
  uye: Uye[];
  popoverData: any;
  yeniKayitMal: Malzemeler;
  yeniKayitMalKat: KategoriMalzeme;
  yeniKayityemKat: KategoriYemek;
  ackapa: number = 0;
  constructor(
    public service: ServicesService,
    public frmbuilder: FormBuilder,
    public alertController: AlertController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.frmGroup = new FormGroup({
      Malzemeler1: new FormControl(),
      Kategori_malzeme1: new FormControl(),
      Kategori_yemek1: new FormControl(),
    });
    this.UyeListe();
    this.YemekListe();
    this.MalzemeListele();
    this.KatMalListele();
    this.YemekkatListe();
  }
  MalzemeEkle(frmGroup) {
    var malzemeler: Malzemeler = new Malzemeler();
    malzemeler.Malzemeler1 = frmGroup.Malzemeler1
    this.service.MalzemeleEkle(malzemeler).subscribe(async (s: Sonuc) => {
      const alert = await this.alertController.create({
    
        header: 'Malzeme Eklendi !',
        message: '<strong>Teşekkür ederiz :)</strong>',
        buttons: [
          {
            text: 'Tamam',
            
          }
        ]
      });
      this.MalzemeListele()
      await alert.present();
    })
  }

  MalzemeKategoriEkle(frmGroup) {
    var malzemekategori: KategoriMalzeme = new KategoriMalzeme();
    malzemekategori.Kategori_malzeme1 = frmGroup.Kategori_malzeme1
    this.service.KatMalEkle(malzemekategori).subscribe(async (s: Sonuc) => {
      const alert = await this.alertController.create({
      
        header: 'Malzemenin Kategorisi Eklendi !',
        message: '<strong>Teşekkür ederiz :)</strong>',
        buttons: [
          {
            text: 'Tamam',
         
          }
        ]
      });
      this.KatMalListele()
      await alert.present();
    })
    
  }

  YemekKategoriEkle(frmGroup) {
    var kategoriyemek: KategoriYemek = new KategoriYemek();
    kategoriyemek.Kategori_yemek1 = frmGroup.Kategori_yemek1
    this.service.KatYemekEkle(kategoriyemek).subscribe(async (s: Sonuc) => {
      const alert = await this.alertController.create({
      
        header: 'Yemeğin Kategorisi Eklendi !',
        message: '<strong>Teşekkür ederiz :)</strong>',
        buttons: [
          {
            text: 'Tamam',
    
          }
        ]
      });
this.YemekkatListe();
      await alert.present();
    })
  }

  YemekListe() {
    this.service.YemekListele().subscribe((d: Yemekler[]) => {
      this.yemek = d;
    })
  }
  
  YemekkatListe() {
    this.service.YemekKategoriListele().subscribe((d: KategoriYemek[]) => {
      this.katyem = d;
    })
  }

  UyeListe() {
    this.service.UyeListele().subscribe((d: Uye[]) => {
      this.uye = d;
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
  malzeme: Malzemeler[];
  MalzemeListele() {
    this.service.MalzemeleListele().subscribe((d: Malzemeler[]) => {
      this.malzeme = d;
    })
  }
  KatMalListele() {
    this.service.KatMalListele().subscribe((d: KategoriMalzeme[]) => {
      this.malkat = d;

    })
  }

  MalzemeSil(malzemeId: string) {
    this.service.MalzemeleSil(malzemeId).subscribe(async (s: Sonuc) => {
      const alert = await this.alertController.create({
        header: s.mesaj,
        buttons: [
          {
            text: 'Tamam',
          }
        ]
      });
      await alert.present();
      this.MalzemeListele();
    })
  }
  
  MalKatSil(katMalzemeId: string) {
    this.service.KatMalSil(katMalzemeId).subscribe(async (s: Sonuc) => {
      const alert = await this.alertController.create({
        header: s.mesaj,
        buttons: [
          {
            text: 'Tamam',
          }
        ]
      });
      await alert.present();
      this.KatMalListele();
    })
  }

  YemekKatSil(katYemekId: string) {
    this.service.KatYemekSil(katYemekId).subscribe(async (s: Sonuc) => {
      const alert = await this.alertController.create({
        header: s.mesaj,
        buttons: [
          {
            text: 'Tamam',
          }
        ]
      });
      await alert.present();
      this.YemekkatListe();
    })
  }

//Malzeme düzenle başlangıç
  MalDuzenle(frmGroup) {
    var kayit: Malzemeler = new Malzemeler();
    kayit.Malzemeler1 = frmGroup.Malzemeler1
    kayit.malzemeId = this.yeniKayitMal.malzemeId
    this.service.MalzemeleDuzenle(kayit).subscribe((s: Sonuc) => {
      if (s.islem) {
        this.MalzemeListele();
        location.href=("/");      }
    })
  }

  MalDuzliste(kayit: Malzemeler) {
    this.yeniKayitMal = kayit;
    this.frmGroup = this.FormOlustur();
   
  }
  FormOlustur() {
    return this.frmbuilder.group({
      Malzemeler1: [this.yeniKayitMal.Malzemeler1],
    })
  }
  //Malzeme düzenle bitiş




  
//Malkat düzenle başlangıç
MalKatDuzenle(frmGroup) {
  var kayit: KategoriMalzeme = new KategoriMalzeme();
  kayit.Kategori_malzeme1 = frmGroup.Kategori_malzeme1
  kayit.katMalzemeId = this.yeniKayitMalKat.katMalzemeId
  this.service.KatMalDuzenle(kayit).subscribe((s: Sonuc) => {
    if (s.islem) {
      this.KatMalListele();
     location.href=("/");

    }
  })
}

MalKatDuzliste(kayit: KategoriMalzeme) {
  this.yeniKayitMalKat = kayit;
  this.frmGroup = this.FormMalKatOlustur();
 

}
FormMalKatOlustur() {
  return this.frmbuilder.group({
    Kategori_malzeme1: [this.yeniKayitMalKat.Kategori_malzeme1],
  })
}
//Malkat düzenle bitiş







  
//Yemek Kategori düzenle başlangıç
YemekKat(frmGroup) {
  var kayit: KategoriYemek = new KategoriYemek();
  kayit.Kategori_yemek1 = frmGroup.Kategori_yemek1
  kayit.katYemekId = this.yeniKayityemKat.katYemekId
  this.service.KatYemekDuzenle(kayit).subscribe((s: Sonuc) => {
    if (s.islem) {
      this.KatMalListele();
     location.href=("/");

    }
  })
}

KatYemekDuzliste(kayit: KategoriYemek) {
  this.yeniKayityemKat = kayit;
  this.frmGroup = this.FormYemekMalKatOlustur();
 

}
FormYemekMalKatOlustur() {
  return this.frmbuilder.group({
    Kategori_yemek1: [this.yeniKayityemKat.Kategori_yemek1],
  })
}
//Malkat düzenle bitiş
}
