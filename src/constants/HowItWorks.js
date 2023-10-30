import macImg from "../assets/HowItWorksPage/mac-intro.png";
import certeficate from "../assets/icons/Certificate 1.png";
import todolist from "../assets/icons/To-do-list 1.png";
import enginner from "../assets/icons/Enginerr 1.png";
import protectiveCloth from "../assets/icons/Protective Cloth 1.png";
import construction from "../assets/icons/Under Contruction 1.png";
import structure from "../assets/icons/Structur 1.png";

export const en = {
  navigation: {
    links: [
      { text: "How it works", path: "/HowItWorks" },
      { text: "Industries", path: "" },
      { text: "Solutions", path: "" },
      { text: "Success Stories", path: "" },
      { text: "About Us", path: "" },
      { text: "News", path: "" },
    ],
    languages: [
      { lang: "English", attribute: "en" },
      { lang: "Turkish", attribute: "tr" },
    ],
  },

  subHero: [
    "No Installation",
    "No Hardware",
    "Just Click & Use",
    "With Existing Cameras",
  ],

  howDoesItWorkSection: {
    heading: "Then How Does Holocrow Work?",
    img: macImg,
    features: [
      { icon: certeficate, text: "Vehicle Identification" },
      { icon: todolist, text: "Stock Controls" },
      { icon: enginner, text: "PPE Check" },
      { icon: protectiveCloth, text: "Ergonomy Control" },
      { icon: construction, text: "Suspicious Item Detection" },
      { icon: structure, text: "Visitor Counting" },
    ],
  },
};

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

export const tr = {
  navigation: {
    links: [
      { text: "Nasıl çalışır", path: "/HowItWorks" },
      { text: "Endüstriler", path: "" },
      { text: "Solutions", path: "" },
      { text: "Çözümler", path: "" },
      { text: "Hakkımızda", path: "" },
      { text: "Haberler", path: "" },
    ],
    languages: [
      { lang: "English", attribute: "en" },
      { lang: "Turkish", attribute: "tr" },
    ],
  },

  subHero: [
    "Kurulum Yok",
    "Donanım Yok",
    "Sadece Tıklayın ve Kullanın",
    "Mevcut Kameralarla",
  ],

  howDoesItWorkSection: {
    heading: "Peki Holocrow Nasıl Çalışır?",
    img: macImg,
    features: [
      { icon: certeficate, text: "Ruhsat" },
      { icon: todolist, text: "Stok Kontrolleri" },
      { icon: enginner, text: "KKD Kontrolü" },
      { icon: protectiveCloth, text: "Ergonomi Kontrolü" },
      { icon: construction, text: "Şüpheli Öğe Tespiti" },
      { icon: structure, text: "Ziyaretçi Sayma" },
    ],
  },
};
