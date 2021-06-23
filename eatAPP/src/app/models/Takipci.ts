export class Takipci {
    takipId: string;
    takipEdenUyeId: string;
    takipEdilenUyeId: string;
    UyeBilgisi: {
        uyeId: string;
        uyeAdSoyad: string;
        uyeEmail: string;
        uyeSifre: string;
        uyeTelefon: string;
        uyeAdmin: boolean;
        uyeFoto: string;
    }
    YemeklerBilgisi:{
            yemekId: string;
            YemekUyeId: string;
            YemekAdi: string;
            Tarif: string;
            yemekFoto: string;

     }
}