import { UrunFoto } from './../models/UrunFoto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favori } from '../models/Favori';
import { KategoriMalzeme } from '../models/KategoriMalzeme';
import { KategoriYemek } from '../models/KategoriYemek';
import { MalzemeKategori } from '../models/MalzemeKategori';
import { Malzemeler } from '../models/Malzemeler';
import { Takipci } from '../models/Takipci';
import { Uye } from '../models/Uye';
import { YemekKategori } from '../models/YemekKategori';
import { Yemekler } from '../models/yemekler';
import { YemekMalzeme } from '../models/YemekMalzeme';
import { UyeFoto } from '../models/UyeFoto';

@Injectable()
export class ServicesService {
     apiUrl = "https://localhost:44395/api/";
     siteUrl = "https://localhost:44395/";
     constructor(
          public http: HttpClient
     ) { }
     //üye
     UyeListele() {
          return this.http.get(this.apiUrl + "uyeliste")
     }

     UyeById(uyeId: string) {
          return this.http.get(this.apiUrl + "uyebyid/" + uyeId);
     }

     UyeEkle(uye: Uye) {
          return this.http.post(this.apiUrl + "uyeekle", uye);
     }

     UyeDuzenle(uye: Uye) {
          return this.http.put(this.apiUrl + "uyeduzenle", uye);
     }

     UyeSil(uyeId: string) {
          return this.http.delete(this.apiUrl + "uyesil/" + uyeId);
     }

     //Yemekler
     YemekListele() {
          return this.http.get(this.apiUrl + "yemekliste")
     }
     
     AlgoritmikYemekListele(Uyeid: string) {
          return this.http.get(this.apiUrl + "algoritmikyemekliste/" + Uyeid);
     }

     YemekById(yemekId: string) {
          return this.http.get(this.apiUrl + "yemekbyid/" + yemekId);
     }

     YemekByUyeId(uyeid: string) {
          return this.http.get(this.apiUrl + "yemekbyiduye/" + uyeid);
     }

     YemekEkle(yemek: Yemekler) {
          return this.http.post(this.apiUrl + "yemekekle", yemek);
     }

     YemekDuzenle(yemek: Yemekler) {
          return this.http.put(this.apiUrl + "yemekduzenle", yemek);
     }

     YemekSil(yemekId: string) {
          return this.http.delete(this.apiUrl + "yemeksil/" + yemekId);
     }

     //YemekMalzeme
     YemekMalzemeListele() {
          return this.http.get(this.apiUrl + "yemekmalliste")
     }

     YemekMalzemeById(yemekmalId: string) {
          return this.http.get(this.apiUrl + "yemekmalbyid/" + yemekmalId);
     }
     YemekMalzemeyemekById(yemekid: string) {
          return this.http.get(this.apiUrl + "yemekmalyemekid/" + yemekid);
     }

     YemekMalzemeEkle(yemek: YemekMalzeme) {
          return this.http.post(this.apiUrl + "yemekmalekle", yemek);
     }

     YemekMalzemeDuzenle(yemek: YemekMalzeme) {
          return this.http.put(this.apiUrl + "yemekmalduzenle", yemek);
     }

     YemekMalzemeSil(yemekmalId: string) {
          return this.http.delete(this.apiUrl + "yemekmalzemesil/" + yemekmalId);
     }

     //YemekKategori
     YemekKategoriListele() {
          return this.http.get(this.apiUrl + "katYemekliste")
     }

     YemekKategoriListe(yemekKatId: string) {
          return this.http.get(this.apiUrl + "yemekkategoriliste" + yemekKatId);
     }

     KategoriYemekListe(katYemekId: string) {
          return this.http.get(this.apiUrl + "kategoriyemekliste" + katYemekId);
     }

     YemekKategoriEkle(yemek: YemekKategori) {
          return this.http.post(this.apiUrl + "yemekkategoriekle", yemek);
     }

     YemekKategoriSil(yemekKatlId: string) {
          return this.http.delete(this.apiUrl + "yemekkategorisil/" + yemekKatlId);
     }

     YemekKategoriHepsiListe() {
          return this.http.get(this.apiUrl + "yemekkatliste")
     }

     //Takipci
     TakipciListele() {
          return this.http.get(this.apiUrl + "takipciliste")
     }

     TakipEdenById(takipedenId: string) {
          return this.http.get(this.apiUrl + "takipedenbyid/" + takipedenId);
     }

     TakipEdilenById(takipedilenlId: string) {
          return this.http.get(this.apiUrl + "takipedilenbyid/" + takipedilenlId);
     }

     TakipciEkle(takipci: Takipci) {
          return this.http.post(this.apiUrl + "takipciekle", takipci);
     }

     TakipciSil(takipciId: string) {
          return this.http.delete(this.apiUrl + "takipcisil/" + takipciId);
     }

     //Malzemeler
     MalzemeleListele() {
          return this.http.get(this.apiUrl + "malzemeliste")
     }

     MalzemeleById(malId: string) {
          return this.http.get(this.apiUrl + "malzemebyid/" + malId);
     }

     MalzemeleEkle(malzeme: Malzemeler) {
          return this.http.post(this.apiUrl + "malzemeekle", malzeme);
     }

     MalzemeleDuzenle(malzeme: Malzemeler) {
          return this.http.put(this.apiUrl + "malzemeduzenle", malzeme);
     }

     MalzemeleSil(malzemeid: string) {
          return this.http.delete(this.apiUrl + "malzemesil/" + malzemeid);
     }

     //MalzemeKategori
     MalKatListele() {
          return this.http.get(this.apiUrl + "malkatliste")
     }

     MalKatEkle(malzeme: MalzemeKategori) {
          return this.http.post(this.apiUrl + "malkatekle", malzeme);
     }

     MalKatDuzenle(malzeme: MalzemeKategori) {
          return this.http.put(this.apiUrl + "malkatduzenle", malzeme);
     }

     MalKatSil(malKatId: string) {
          return this.http.delete(this.apiUrl + "malkatsil/" + malKatId);
     }

     //KategoriYemek
     KatYemekListele() {
          return this.http.get(this.apiUrl + "katyemekliste")
     }

     KatYemekById(katyemekId: string) {
          return this.http.get(this.apiUrl + "katyemekbyid/" + katyemekId);
     }

     KatYemekEkle(katyemek: KategoriYemek) {
          return this.http.post(this.apiUrl + "katyemekekle", katyemek);
     }

     KatYemekDuzenle(katyemek: KategoriYemek) {
          return this.http.put(this.apiUrl + "katyemekduzenle", katyemek);
     }

     KatYemekSil(katYemekId: string) {
          return this.http.delete(this.apiUrl + "katyemeksil/" + katYemekId);
     }

     //KategoriMalzeme
     KatMalListele() {
          return this.http.get(this.apiUrl + "katmalliste")
     }

     KatMalById(katmalıd: string) {
          return this.http.get(this.apiUrl + "katmalbyid/" + katmalıd);
     }
     KatMalDuzenle(katmal: KategoriMalzeme) {
          return this.http.put(this.apiUrl + "Katmalduzenle", katmal);
     }

     KatMalEkle(katmalyemek: KategoriMalzeme) {
          return this.http.post(this.apiUrl + "kategorimalzemeekle", katmalyemek);
     }

     KatMalSil(katmalıd: string) {
          return this.http.delete(this.apiUrl + "kategorimalzemesil/" + katmalıd);
     }

     //Favori

     FavoriById(favoriId: string) {
          return this.http.get(this.apiUrl + "favoribyid/" + favoriId);
     }
     FavoriByuyeId(uyeid: string) {
          return this.http.get(this.apiUrl + "favoribyuyeid/" + uyeid);
     }
     FavoriByUyeId(favoriuyeıd: string) {
          return this.http.get(this.apiUrl + "favoribyuyeid/" + favoriuyeıd);
     }

     FavoriEkle(favori: Favori) {
          return this.http.post(this.apiUrl + "favoriekle", favori);
     }

     FavoriSil(favoriId: string) {
          return this.http.delete(this.apiUrl + "favorisil/" + favoriId);
     }


     //Yemek Foto

     YemekFotoGuncelle(yemekFoto: UrunFoto) {
          return this.http.post(this.apiUrl + "yemekfotoguncelle", yemekFoto);
        }
     //Yemek Foto

     UyeFotoGuncelle(uyeFoto: UyeFoto) {
          return this.http.post(this.apiUrl + "uyefotoguncelle", uyeFoto);
        }

     //Oturum

  tokenAl(email: string, parola: string) {
     var data = "username=" + email + "&password=" + parola + "&grant_type=password";
     var reqHeader = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
     return this.http.post(this.apiUrl + "/token", data, { headers: reqHeader })
   }
 
   oturumKontrol() {
     if (localStorage.getItem("token")) {
       return true;
     }
     else {
       return false;
     }
   }
 
   oturumKontrolAdmin() {
 
     if (localStorage.getItem("uyeYetkileri") == '["Admin"]') {
 
       return true;
     }
     else {
       return false;
     }
   }

   yetkiKontrol(yetkiler) {
     var uyeYetkileri: string[] = JSON.parse(localStorage.getItem("uyeYetkileri"));
     var sonuc: boolean = false;
     if (uyeYetkileri) {
       yetkiler.forEach(element => {
         if (uyeYetkileri.indexOf(element) > -1) {
           sonuc = true;
           return false;
         }
       });
 
     }
 
     return sonuc;
   }


}