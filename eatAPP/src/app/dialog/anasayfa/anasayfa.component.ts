import { Yemekler } from './../../models/yemekler';
import { Sonuc } from './../../models/sonuc';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { ServicesService } from 'src/app/services/services.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss'],
})
export class AnasayfaComponent implements OnInit {
  mewzu: number = 0;
  @Input() name: string;
  @Input() secyemekId: string;
  yeniYemek:Yemekler;

  frmGroup: FormGroup;
  constructor(
    private popoverCtrl: PopoverController,
    public servis: ServicesService, 
    public frmbuilder: FormBuilder,
    public alertController: AlertController,) { }

  ngOnInit() {
    this.frmGroup = new FormGroup({
      YemekAdi: new FormControl(),
      Tarif: new FormControl(),
    });

  }

  dismiss() {
    this.popoverCtrl.dismiss({ popoverData: 'random' });
  }

  YemekSil() {
    this.servis.YemekSil(this.secyemekId).subscribe((s: Sonuc) => {
      location.href = ("/");
    })
  }



  Yemek(frmGroup) {
    var kayit: Yemekler = new Yemekler();
    kayit.YemekAdi = frmGroup.YemekAdi
    kayit.Tarif = frmGroup.Tarif
    this.servis.YemekDuzenle(kayit).subscribe((s: Sonuc) => {
      if (s.islem) {
        location.href = ("/");

      }
    })
  }

  KatYemekDuzliste(kayit: Yemekler) {
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
