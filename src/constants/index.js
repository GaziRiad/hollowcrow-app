import danger from "../assets/sliders/Dangeruos 1.png";
import certeficate from "../assets/sliders/Certificate 1.png";
import construction from "../assets/sliders/Under Contruction 1.png";

import enginner from "../assets/sliders/Enginerr 1.png";
import jackhammer from "../assets/sliders/Jackhammer  1.png";
import workingMan from "../assets/sliders/man 6.png";

import structure from "../assets/sliders/Structur 1.png";
import management from "../assets/sliders/Tablet-Management 1.png";
import education from "../assets/sliders/Education Icon9 1.png";

import todolist from "../assets/sliders/To-do-list 1.png";
import briefcase from "../assets/sliders/Brifecase 1.png";
import achievement from "../assets/sliders/Education Icon2 1.png";

import platformOverview from "../assets/homeimgs/platform-overview.png";

import footerIcon1 from "../assets/homeimgs/footer-icon1.png";
import footerIcon2 from "../assets/homeimgs/footer-icon2.png";
import footerIcon3 from "../assets/homeimgs/footer-icon3.png";

///////////////////////
// HOME PAGE CONTENT //
///////////////////////

export const en = {
  navigation: {
    links: [
      { text: "How it works", path: "" },
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
  sliders: [
    {
      heading: "security",
      slides: [
        {
          icon: danger,
          title: "Restricted Area Control",
          text: "Watch your assets with only true alarms according to your security rule.",
        },
        {
          icon: certeficate,
          title: "Vehicle Identification",
          text: "Access control of vehicles with their plate and other features to prevent violation and fraud.",
        },
        {
          icon: construction,
          title: "Suspicious Item Detection",
          text: "Detect doubtful attitudes and potential harmful objects, bags, box etc. to secure your area.",
        },
        {
          icon: danger,
          title: "Restricted Area Control 2",
          text: "Watch your assets with only true alarms according to your security rule.",
        },
      ],
    },
    {
      heading: "Safety",
      slides: [
        {
          icon: enginner,
          title: "PPE",
          text: "Control proper PPE usage of staff to minimize effects on them from work accidents.",
        },
        {
          icon: jackhammer,
          title: "Machine Interactions",
          text: "Poor machine usage can cause serious injuries. Watch out and block accidents with real-time warnings to protect your staff and business.",
        },
        {
          icon: workingMan,
          title: "Housekeeping",
          text: "Injuries due to inadequate housekeeping are entirely avoidable. Prompt identification leads to swift rectification and the prevention of harm.",
        },
        {
          icon: danger,
          title: "Restricted Area Control 2",
          text: "Watch your assets with only true alarms according to your security rule.",
        },
      ],
    },
    {
      heading: "Marketing",
      slides: [
        {
          icon: structure,
          title: "Visitor Counting",
          text: "Count unique visitors using anonymous IDs, excluding staff, to gauge the potential of your stores.",
        },
        {
          icon: management,
          title: "Demographic Targeting",
          text: "Get the demographic diversity of your visitors to implement the correct segmentation.",
        },
        {
          icon: education,
          title: "A/B Testing",
          text: "Understand customers' choices on your new products in a quick way.",
        },
        {
          icon: danger,
          title: "Restricted Area Control 2",
          text: "Watch your assets with only true alarms according to your security rule.",
        },
      ],
    },
    {
      heading: "Quality Control",
      slides: [
        {
          icon: todolist,
          title: "Stock Controls",
          text: "Count or measure your stocks by CCTV.",
        },
        {
          icon: briefcase,
          title: "Patterns & Colours Check",
          text: "Analyze visibility of product has been produced over streams and images to approve quality assurance.",
        },
        {
          icon: achievement,
          title: "Operational Excellence",
          text: "Detect and track every single step of your operations to analyze processes open to improvement.",
        },
        {
          icon: danger,
          title: "Restricted Area Control 2",
          text: "Watch your assets with only true alarms according to your security rule.",
        },
      ],
    },
  ],
  platformDetails: {
    sectionImg: platformOverview,
    textContent: [
      {
        title: "Plug & Use",
        text: "The moment you register and introduce your cameras to Holocrow, you start using the platform. All models of cameras & CCTVs can be connected. From the dedicated page for devices, you can easily view and control the connection status of the devices.",
      },
      {
        title: "Alerts & Notifications",
        text: "Instant alerts and notifications are of vital importance in the solutions you'll use, especially in the fields of workplace safety and security. Holocrow sends instant notifications to relevant departments in risky situations.",
      },
      {
        title: "Visual Reports & Analytics",
        text: "The collected data is automatically visualized and made as understandable and interpretable as possible. You can view all the reports and data on a weekly, monthly, yearly basis, or for a date range you determine.",
      },
      {
        title: "Detailed Guides",
        text: "While we take pride in creating the most user-friendly platform, you can find our guides, which will allow you to get instant answers to any questions that might arise, in the Help Center section whenever you want.",
      },
      {
        title: "Helpdesk",
        text: "If you have different questions that might come to your mind, you can immediately reach out to HelpDesk and get assistance from our expert team.",
      },
    ],
  },
  testimonials: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  homeFooter: [
    {
      icon: footerIcon1,
      text: "No Installation",
    },
    {
      icon: footerIcon2,
      text: "Cancel Anytime",
    },
    {
      icon: footerIcon3,
      text: "7-Day Free Trial",
    },
  ],
};

// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////

export const tr = {
  navigation: {
    links: [
      { text: "Nasıl çalışır", path: "" },
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

  sliders: [
    {
      heading: "güvenlik",
      slides: [
        {
          icon: danger,
          title: "Kısıtlı Alan Kontrolü",
          text: "Varlıklarınızı güvenlik kuralınıza göre yalnızca gerçek alarmlarla izleyin.",
        },
        {
          icon: certeficate,
          title: "Ruhsat",
          text: "Araçların plakası ve diğer özellikleriyle ihlal ve dolandırıcılığın önlenmesi amacıyla erişim kontrolü.",
        },
        {
          icon: construction,
          title: "Şüpheli Öğe Tespiti",
          text: "Bölgenizi güvence altına almak için şüpheli tutumları ve potansiyel zararlı nesneleri, çantaları, kutuları vb. tespit edin.",
        },
        {
          icon: danger,
          title: "Kısıtlı Alan Kontrolü 2",
          text: "Varlıklarınızı güvenlik kuralınıza göre yalnızca gerçek alarmlarla izleyin.",
        },
      ],
    },
    {
      heading: "Emniyet",
      slides: [
        {
          icon: enginner,
          title: "PPE",
          text: "İş kazalarının personel üzerindeki etkilerini en aza indirmek için personelin uygun KKD kullanımını kontrol edin.",
        },
        {
          icon: jackhammer,
          title: "Makine Etkileşimleri",
          text: "Makinenin kötü kullanımı ciddi yaralanmalara neden olabilir. Personelinizi ve işletmenizi korumak için gerçek zamanlı uyarılarla dikkat edin ve kazaları engelleyin.",
        },
        {
          icon: workingMan,
          title: "Temizlik",
          text: "Yetersiz temizlik nedeniyle yaralanmalar tamamen önlenebilir. Hızlı tanımlama, hızlı düzeltmeye ve zararın önlenmesine yol açar.",
        },
        {
          icon: danger,
          title: "Kısıtlı Alan Kontrolü 2",
          text: "Varlıklarınızı güvenlik kuralınıza göre yalnızca gerçek alarmlarla izleyin.",
        },
      ],
    },
    {
      heading: "Pazarlama",
      slides: [
        {
          icon: structure,
          title: "Ziyaretçi Sayma",
          text: "Mağazalarınızın potansiyelini ölçmek için personel hariç anonim kimlikleri kullanarak benzersiz ziyaretçileri sayın.",
        },
        {
          icon: management,
          title: "Demografik Hedefleme",
          text: "Doğru segmentasyonu uygulamak için ziyaretçilerinizin demografik çeşitliliğini öğrenin.",
        },
        {
          icon: education,
          title: "A/B Testi",
          text: "Müşterilerin yeni ürünlerinize ilişkin tercihlerini hızlı bir şekilde anlayın.",
        },
        {
          icon: danger,
          title: "Kısıtlı Alan Kontrolü 2",
          text: "Varlıklarınızı güvenlik kuralınıza göre yalnızca gerçek alarmlarla izleyin.",
        },
      ],
    },
    {
      heading: "Kalite kontrol",
      slides: [
        {
          icon: todolist,
          title: "Stok Kontrolleri",
          text: "Stoklarınızı CCTV ile sayın veya ölçün.",
        },
        {
          icon: briefcase,
          title: "Desen ve Renk Kontrolü",
          text: "Kalite güvencesini onaylamak için akışlar ve resimler üzerinden üretilen ürünün görünürlüğünü analiz edin.",
        },
        {
          icon: achievement,
          title: "Operasyonel mükemmellik",
          text: "İyileştirmeye açık süreçleri analiz etmek için operasyonlarınızın her adımını tespit edip takip edin.",
        },
        {
          icon: danger,
          title: "Kısıtlı Alan Kontrolü 2",
          text: "Varlıklarınızı güvenlik kuralınıza göre yalnızca gerçek alarmlarla izleyin.",
        },
      ],
    },
  ],
  platformDetails: {
    sectionImg: platformOverview,
    textContent: [
      {
        title: "Tak ve Kullan",
        text: "Kameralarınızı Holocrow'a kaydedip tanıttığınız anda platformu kullanmaya başlıyorsunuz. Tüm kamera ve CCTV modelleri bağlanabilir. Cihazlara özel sayfadan cihazların bağlantı durumunu kolayca görüntüleyebilir ve kontrol edebilirsiniz.",
      },
      {
        title: "Uyarılar ve Bildirimler",
        text: "Özellikle iş yeri emniyeti ve güvenliği alanlarında kullanacağınız çözümlerde anlık uyarılar ve bildirimler hayati önem taşıyor. Holocrow riskli durumlarda ilgili departmanlara anlık bildirimler gönderir.",
      },
      {
        title: "Görsel Raporlar ve Analitikler",
        text: "Toplanan veriler otomatik olarak görselleştirilerek mümkün olduğunca anlaşılır ve yorumlanabilir hale getirilir. Haftalık, aylık, yıllık veya belirleyeceğiniz tarih aralığına ait tüm rapor ve verileri görüntüleyebilirsiniz.",
      },
      {
        title: "Ayrıntılı Kılavuzlar",
        text: "En kullanıcı dostu platformu oluşturmanın gururunu yaşarken, aklınıza gelebilecek her türlü soruya anında cevap almanızı sağlayacak rehberlerimizi Yardım Merkezi bölümünde dilediğiniz zaman bulabilirsiniz.",
      },
      {
        title: "Yardım Masası",
        text: "Aklınıza gelebilecek farklı sorular olursa hemen HelpDesk'e ulaşarak uzman ekibimizden yardım alabilirsiniz.",
      },
    ],
  },
  testimonials: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  homeFooter: [
    {
      icon: footerIcon1,
      text: "Kurulum Yok",
    },
    {
      icon: footerIcon2,
      text: "İstediğiniz Zaman İptal Edin",
    },
    {
      icon: footerIcon3,
      text: "7 Günlük Ücretsiz Deneme",
    },
  ],
};

// export const navigations = [
//   {
//     language: "en",
//     links: [
//       { text: "How it works", path: "" },
//       { text: "Industries", path: "" },
//       { text: "Solutions", path: "" },
//       { text: "Success Stories", path: "" },
//       { text: "About Us", path: "" },
//       { text: "News", path: "" },
//     ],
//     languages: [
//       { lang: "English", attribute: "en" },
//       { lang: "Turkish", attribute: "tr" },
//     ],
//   },
//   {
//     language: "tr",
//     links: [
//       { text: "Nasıl çalışır", path: "" },
//       { text: "Endüstriler", path: "" },
//       { text: "Solutions", path: "" },
//       { text: "Çözümler", path: "" },
//       { text: "Hakkımızda", path: "" },
//       { text: "Haberler", path: "" },
//     ],
//     languages: [
//       { lang: "English", attribute: "en" },
//       { lang: "Turkish", attribute: "tr" },
//     ],
//   },
// ];

// PLATFORM-OVERVIEW
export const platformDetails = {
  sectionImg: platformOverview,
  textContent: [
    {
      title: "Plug & Use",
      text: "The moment you register and introduce your cameras to Holocrow, you start using the platform. All models of cameras & CCTVs can be connected. From the dedicated page for devices, you can easily view and control the connection status of the devices.",
    },
    {
      title: "Alerts & Notifications",
      text: "Instant alerts and notifications are of vital importance in the solutions you'll use, especially in the fields of workplace safety and security. Holocrow sends instant notifications to relevant departments in risky situations.",
    },
    {
      title: "Visual Reports & Analytics",
      text: "The collected data is automatically visualized and made as understandable and interpretable as possible. You can view all the reports and data on a weekly, monthly, yearly basis, or for a date range you determine.",
    },
    {
      title: "Detailed Guides",
      text: "While we take pride in creating the most user-friendly platform, you can find our guides, which will allow you to get instant answers to any questions that might arise, in the Help Center section whenever you want.",
    },
    {
      title: "Helpdesk",
      text: "If you have different questions that might come to your mind, you can immediately reach out to HelpDesk and get assistance from our expert team.",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const homeFooter = [
  {
    icon: footerIcon1,
    text: "No Installation",
  },
  {
    icon: footerIcon2,
    text: "Cancel Anytime",
  },
  {
    icon: footerIcon3,
    text: "7-Day Free Trial",
  },
];
