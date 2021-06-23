import { Yemekler } from './../models/yemekler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  yemek:Yemekler[];



  @ViewChild('searchbar', { read: ElementRef }) searchbarRef: ElementRef;
  search: boolean = false;
  queryText: string;



  constructor( public servis:ServicesService,) { }

  ngOnInit() {
    this.YemekListe();
   
  }



  YemekListe(){
    this.servis.YemekListele().subscribe((d:Yemekler[])=>{
      this.yemek=d;
    })
  }

  searchAction(texto: any) {
    let val = texto.target.value;
  }
}
