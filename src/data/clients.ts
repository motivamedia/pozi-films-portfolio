import logoJWMarriott from "@/assets/clients/JW_Marriott.png";
import logoKayaGNH from "@/assets/clients/Kaya_GNH.png";
import logoLansdowne from "@/assets/clients/Lansdowne_Club.png";
import logoTurkishAirlines from "@/assets/clients/Turkish_Airlines.png";
import logoSalesforce from "@/assets/clients/Salesforce.png";
import logoMeta from "@/assets/clients/Meta.png";
import logoSamsung from "@/assets/clients/Samsung_new.jpg";
import logoTurkcell from "@/assets/clients/Turkcell.png";
import logoLCWaikiki from "@/assets/clients/LC_Waikiki.png";
import logoLFW from "@/assets/clients/London_Fashion_Week.png";
import logoNutraxin from "@/assets/clients/Nutraxin.png";
import logoKaraca from "@/assets/clients/Karaca.png";
import logoJeton from "@/assets/clients/Jeton_Wallet.jpg";
import logoYeniRaki from "@/assets/clients/Yeni_Raki.png";
import logoBioxcin from "@/assets/clients/Bioxcin.svg";
import logoGnctrkcll from "@/assets/clients/Gnctrkcll.png";
import logoCaferErol from "@/assets/clients/Cafer_Erol.png";
import logoCloudsource from "@/assets/clients/Cloudsource.png";
import logoAuntieAnnes from "@/assets/clients/Auntie_Annes.png";
import logoFunk from "@/assets/clients/Funk_Motorsport.svg";
import logoBretz from "@/assets/clients/Bretz.png";
import logoTMC3 from "@/assets/clients/TMC3.png";
import logoBarrus from "@/assets/clients/Barrus.jpg";
import logo191 from "@/assets/clients/191_Automotive.png";
import logoRuya from "@/assets/clients/Ruya_London.png";
import logoFatPhills from "@/assets/clients/Fat_Phills_Diner.png";
import logoGMF from "@/assets/clients/Global_Medical_Forum.jpg";
import logoArdaSayiner from "@/assets/clients/Arda_Sayiner.png";
import logoAcademieBiere from "@/assets/clients/Academie_de_la_Biere.png";
import logoCNNTurk from "@/assets/clients/CNN_Turk.png";
import logoBeIN from "@/assets/clients/beIN_Connect.png";
import logoGastromasa from "@/assets/clients/Gastromasa.png";
import logoPackagingSource from "@/assets/clients/Packaging_Source.png";
import logoReisJewellery from "@/assets/clients/Reis_Jewellery.png";

export interface ClientBrand {
  name: string;
  logo: string;
  size?: string;
  invert?: boolean;
}

export const clientBrands: ClientBrand[] = [
  { name: "JW Marriott", logo: logoJWMarriott },
  { name: "Kaya GNH London", logo: logoKayaGNH },
  { name: "Lansdowne Club", logo: logoLansdowne },
  { name: "Turkish Airlines", logo: logoTurkishAirlines },
  { name: "Salesforce", logo: logoSalesforce },
  { name: "Meta", logo: logoMeta },
  { name: "Samsung", logo: logoSamsung },
  { name: "Turkcell", logo: logoTurkcell },
  { name: "LC Waikiki", logo: logoLCWaikiki },
  { name: "London Fashion Week", logo: logoLFW },
  { name: "Nutraxin", logo: logoNutraxin, size: "h-7" },
  { name: "Karaca", logo: logoKaraca, size: "h-7" },
  { name: "Bioxcin", logo: logoBioxcin },
  { name: "GNC Trkcll", logo: logoGnctrkcll },
  { name: "Jeton Wallet", logo: logoJeton },
  { name: "Yeni Rakı", logo: logoYeniRaki },
  { name: "Cafer Erol", logo: logoCaferErol },
  { name: "Cloudsource", logo: logoCloudsource },
  { name: "Auntie Anne's", logo: logoAuntieAnnes },
  { name: "Funk Motorsport", logo: logoFunk, invert: true },
  { name: "Bretz", logo: logoBretz },
  { name: "TMC3", logo: logoTMC3 },
  { name: "Barrus", logo: logoBarrus },
  { name: "191 Automotive", logo: logo191 },
  { name: "Ruya London", logo: logoRuya },
  { name: "Fat Phill's Diner", logo: logoFatPhills, invert: true },
  { name: "Global Medical Forum", logo: logoGMF },
  { name: "Arda Sayiner", logo: logoArdaSayiner },
  { name: "Académie de la Bière", logo: logoAcademieBiere, invert: true },
  { name: "CNN Türk", logo: logoCNNTurk },
  { name: "beIN Connect", logo: logoBeIN },
  { name: "Gastromasa", logo: logoGastromasa },
  { name: "Packaging Source", logo: logoPackagingSource },
  { name: "Reis Jewellery", logo: logoReisJewellery },
];
