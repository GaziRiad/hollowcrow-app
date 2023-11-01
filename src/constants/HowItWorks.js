import macImg from "../assets/HowItWorksPage/mac-intro.png";
import certeficate from "../assets/icons/Certificate 1.png";
import todolist from "../assets/icons/To-do-list 1.png";
import enginner from "../assets/icons/Enginerr 1.png";
import protectiveCloth from "../assets/icons/Protective Cloth 1.png";
import construction from "../assets/icons/Under Contruction 1.png";
import structure from "../assets/icons/Structur 1.png";

import securityIcon from "../assets/HowItWorksPage/security-icon.png";
import safetyIcon from "../assets/HowItWorksPage/safety-icon.png";
import marketingIcon from "../assets/HowItWorksPage/marketing-icon.png";
import controlIcon from "../assets/HowItWorksPage/quality-control-icon.png";

// Companies logos
import company1 from "../assets/HowItWorksPage/companies/image1.png";
import company2 from "../assets/HowItWorksPage/companies/image2.png";
import company3 from "../assets/HowItWorksPage/companies/image3.png";
import company4 from "../assets/HowItWorksPage/companies/image4.png";
import company5 from "../assets/HowItWorksPage/companies/image5.png";
import company6 from "../assets/HowItWorksPage/companies/image6.png";
import company7 from "../assets/HowItWorksPage/companies/image7.png";
import company8 from "../assets/HowItWorksPage/companies/image8.png";
import company9 from "../assets/HowItWorksPage/companies/image9.png";

export const en = {
  navigation: {
    links: [
      { text: "How it works", path: "/howItWorks" },
      { text: "Industries", path: "/industries" },
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

  cardsSection: [
    {
      icon: securityIcon,
      title: "Security",
      options: [
        "Restricted Area Control",
        "Vehicle Identification",
        "Suspicious Item Detection",
        "Crowd Analysis",
        "Facial Recognition",
        "Behavioral Analysis",
        "Surveillance & Real-time Analysis",
      ],
    },
    {
      icon: safetyIcon,
      title: "Safety",
      options: [
        "PPE",
        "Housekeeping",
        "Workplace Safety",
        "Machine Interactions",
        "Pedestrian Path",
        "Ergonomy Control",
        "Handrail Usage",
        "Area Controls",
        "Vehicle Control",
        "Man-down Detection",
      ],
    },
    {
      icon: marketingIcon,
      title: "Marketing",
      options: [
        "Sales & Marketing",
        "Demographic Targeting",
        "A/B Testing",
        "Heatmap & Footfall",
        "Product Engagement Analysis",
        "Inventory & Stock Control",
      ],
    },
    {
      icon: controlIcon,
      title: "Quality Control",
      options: [
        "Stock Controls",
        "Efficiency",
        "Patterns & Colours Check",
        "Operational Excellence",
        "Staff Efficiency Analysis",
        "Operational Excellence",
        "Packaging Control",
      ],
    },
  ],

  trustedBySection: {
    heading: "We make them see the beyond.",
    companies: [
      company1,
      company2,
      company3,
      company4,
      company5,
      company6,
      company7,
      company8,
      company9,
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
      { text: "Nasıl çalışır", path: "/howItWorks" },
      { text: "Endüstriler", path: "/industries" },
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
  cardsSection: [
    {
      icon: securityIcon,
      title: "Güvenlik",
      options: [
        "Kısıtlı Alan Kontrolü",
        "Ruhsat",
        "Şüpheli Öğe Tespiti",
        "Kalabalık Analizi",
        "Yüz tanıma",
        "Davranış Analizi",
        "Gözetim ve Gerçek Zamanlı Analiz",
      ],
    },
    {
      icon: safetyIcon,
      title: "Emniyet",
      options: [
        "KKD",
        "Temizlik",
        "İşyeri güvenliği",
        "Makine Etkileşimleri",
        "Yaya yolu",
        "Ergonomi Kontrolü",
        "Küpeşte Kullanımı",
        "Alan Kontrolleri",
        "Araç kontrol",
        "Adam Düşmesi Tespiti",
      ],
    },
    {
      icon: marketingIcon,
      title: "Pazarlama",
      options: [
        "Satış ve Pazarlama",
        "Demografik Hedefleme",
        "A/B Testi",
        "Isı Haritası ve Yaya Sayısı",
        "Ürün Etkileşim Analizi",
        "Envanter ve Stok Kontrolü",
      ],
    },
    {
      icon: controlIcon,
      title: "Kalite kontrol",
      options: [
        "Stok Kontrolleri",
        "Yeterlik",
        "Desen ve Renk Kontrolü",
        "Operasyonel mükemmellik",
        "Personel Verimliliği Analizi",
        "Operasyonel mükemmellik",
        "Paketleme Kontrolü",
      ],
    },
  ],
  trustedBySection: {
    heading: "Ötesini görmelerini sağlıyoruz.",
    companies: [
      company1,
      company2,
      company3,
      company4,
      company5,
      company6,
      company7,
      company8,
      company9,
    ],
  },
};
