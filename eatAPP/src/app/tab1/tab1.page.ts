import { Component } from '@angular/core';
import { Favori } from '../models/Favori';
import { Uye } from '../models/Uye';
import { Yemekler } from '../models/yemekler';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  uye: Uye[];
  yemekler: Yemekler[];
  favori: Favori[];
  constructor(
    public service: ServicesService
  ) { }

  UyeListe() {
    this.service.UyeListele().subscribe((d: Uye[]) => {
      this.uye = d;
    })
  }

}
