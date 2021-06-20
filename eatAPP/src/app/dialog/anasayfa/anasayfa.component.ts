import { Sonuc } from './../../models/sonuc';
import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss'],
})
export class AnasayfaComponent implements OnInit {
  mewzu:number = 0;
  @Input() name: string;
  @Input() secyemekId: string;
  constructor(private popoverCtrl: PopoverController,
    public servis:ServicesService) {}

  ngOnInit() {
    console.log(this.secyemekId)
  }
  
  dismiss() {
    this.popoverCtrl.dismiss({ popoverData: 'random' });
  }

  YemekSil(){
    this.servis.YemekSil(this.secyemekId).subscribe((s:Sonuc)=>{
      console.log(s);
    })
  }
}
