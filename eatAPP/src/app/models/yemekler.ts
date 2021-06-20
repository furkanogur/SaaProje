export class Yemekler {
    yemekId: string;
    YemekUyeId: string;
    YemekAdi: string;
    Tarif: string;
    yemekFoto:string;
    UyeBilgisi: {
        uyeId: string;
        uyeAdSoyad: string;
        uyeEmail: string;
        uyeSifre: string;
        uyeTelefon: string;
        uyeAdmin: boolean;
    }
    YemekKategori: [
        {
            yemekKategoriId: string;
            Yemek_id: string;
            Kategori_yemek_id: string;
            kategoriYemekBilgi: {
                katYemekId: string;
                Kategori_yemek1: string;
            }
        }
    ]
    KategoriYemek: 
        {
            katYemekId: string;
            Kategori_yemek1: string;
        }
    
    YemekMalzeme: 
        {
            yemekMalzemeId: string;
            Yemek_id: string;
            Malzeme_id: string;
            Miktar: string;
            Birim: string;
            YemekMalzeme: {
                malzemeId: string;
                Malzemeler1: string;
            }
        }
    
}
