import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from '../models/sonuc';
import { Uye } from '../models/Uye';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  frmGroup: FormGroup;
  
sayi=1;


  constructor(
    public servis:ServicesService,
    public frmbuilder: FormBuilder
  ) { 
    this.frmGroup = new FormGroup({
      uyeAdSoyad: new FormControl(),
      uyeEmail: new FormControl(),
      uyeSifre: new FormControl(),
      uyeTelefon: new FormControl()

    });
  }

  ngOnInit() {

  }

  OturumAc(email, parola) {
    this.servis.tokenAl(email, parola).subscribe((d: any) => {
      localStorage.setItem("token", d.access_token);
      localStorage.setItem("uyeId", d.uyeId);
      localStorage.setItem("uyeadi", d.uyeadi);
      localStorage.setItem("uyeYetkileri", d.uyeYetkileri);

      if(localStorage.getItem("uyeYetkileri")=='["Admin"]'){
        location.href=('/')
      }


    }, err => {
      var s: Sonuc = new Sonuc();
      s.islem = false;
      s.mesaj = "e-mail veya şifre yanlış!"
      //this.alert.AlertUygula(s);
    });
  }
  KayitOl(frmGroup) {
    var uye: Uye = new Uye();
    uye.uyeAdSoyad = frmGroup.uyeAdSoyad
    uye.uyeEmail = frmGroup.uyeEmail
    uye.uyeSifre = frmGroup.uyeSifre
    uye.uyeTelefon = frmGroup.uyeTelefon
    if (uye) {
      this.servis.UyeEkle(uye).subscribe((s: Sonuc) => {        
      });
    }
  } }
