import { ServicesService } from './../services/services.service';
import { Malzemeler } from './../models/Malzemeler';
import { Component } from '@angular/core';
import { KategoriYemek } from '../models/KategoriYemek';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  malzemeler:Malzemeler[];
  kategoriler:KategoriYemek[];
  malDizi:string[];

  constructor(
    public service: ServicesService
    ) {}

    ngOnInit(): void {
      this.MalzemeListe();
      this.KatListe();
        
      }
/*listeleme başlangıç*/
  MalzemeListe() {
    this.service.MalzemeleListele().subscribe((d: Malzemeler[]) => {
      this.malzemeler = d;
    })
  }

  KatListe() {
    this.service.KatYemekListele().subscribe((d: KategoriYemek[]) => {
      this.kategoriler = d;
    })
  }
/*listeleme bitiş*/


malArrayEkle(){



}

}

