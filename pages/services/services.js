header();
theLangBtn("../../gb.svg", "../../sa.svg");
footerText();

// big hero

let bigHero = document.querySelector(".big-hero h1");
bigHeroText();

// fqa

let fqaTitle = document.querySelector(".fqa .sec-title");
let fqaQuestionsData = [
  {
    ar: {
      q: "ماذا يقدم نظام رقيب للمراقبة بالذكاء الاصطناعي؟ ",
      ans: "يحوّل رقيب كاميرات المراقبة التقليدية إلى نظام مراقبة ذكي. إذ يقوم برنامجنا المعتمد على الذكاء الاصطناعي بتحليل بث الفيديو لحظيًا لاكتشاف السلوكيات والمخاطر الأمنية والأنشطة التشغيلية. وهذا يساعد الشركات على تعزيز الأمان، ومتابعة العمليات، واستقبال تنبيهات فورية دون الحاجة إلى تركيب أجهزة جديدة.",
    },
    en: {
      q: "What does the Rgeeb AI monitoring system do?",
      ans: "Rgeeb transforms standard CCTV cameras into intelligent monitoring systems. Our AI software analyzes video streams in real time to detect behaviors, safety risks, and operational activities. This allows businesses to improve security, monitor operations, and receive instant alerts without installing new hardware.",
    },
    openingStatus: "open",
    btnIcon: "minus",
  },
  {
    ar: {
      q: "هل أحتاج إلى تركيب كاميرات جديدة؟ ",
      ans: " لا، لا تحتاج إلى تركيب كاميرات جديدة. يعمل Rgeeb مع كاميرات المراقبة الموجودة لديك بالفعل، حيث ترتبط منصتنا بنظام الفيديو الحالي وتطبق تحليلات الذكاء الاصطناعي على البث المباشر. وهذا يتيح لك تطوير قدرات المراقبة لديك دون الحاجة إلى استبدال الكاميرات أو البنية التحتية الحالية.",
    },
    en: {
      q: "Do I need to install new cameras?",
      ans: "No. Rgeeb works with your existing CCTV cameras. Our platform connects to your current video system and applies AI analysis to the live camera feeds. This means you can upgrade your monitoring capabilities without replacing your cameras or infrastructure.",
    },
    openingStatus: "",
    btnIcon: "plus",
  },
  {
    ar: {
      q: "ما أنواع الرصد والتنبيهات التي يستطيع الذكاء الاصطناعي تنفيذها؟ ",
      ans: " تستطيع نماذج الذكاء الاصطناعي لدينا رصد مجموعة واسعة من الأحداث والسلوكيات بحسب طبيعة البيئة التشغيلية. ويشمل ذلك مخالفات السلامة، والأنشطة المشبوهة، والدخول غير المصرح به، وسلوك الحشود، واستخدام المعدات، والحالات التشغيلية غير الطبيعية. كما يمكن للنظام إرسال تنبيهات أو تقارير عند وقوع أحداث محددة.",
    },
    en: {
      q: "What types of detections can the AI perform?",
      ans: "Our AI models can detect a wide range of events and behaviors depending on the environment. This includes safety violations, suspicious activities, unauthorized access, crowd behavior, equipment usage, and operational anomalies. The system can also send alerts or reports when specific events occur.",
    },
    openingStatus: "",
    btnIcon: "plus",
  },
];
let fqaQuestionsContainer = document.querySelector(".fqa .questions");
function updateIcon(element) {
  let icon = element.querySelector("i");

  if (element.classList.contains("open")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}
fqa();

// call us

let callUsData = {
  ar: {
    title: "اتصل بنا",
    p: "إذا كنت بحاجة لاستشارة، لا تتردد في الاتصال بنا؛ سنصل إليك ونقوم بالتواصل معك.",
  },
  en: {
    title: "call us",
    p: "If you’re searching out advice, please call us. We will discover you and get in touch.",
  },
};
let callUsTitle = document.querySelector(".call-us h2");
let callUsP = document.querySelector(".call-us p");
callUsText();

// process

let processTitle = document.querySelector(".process .sec-title");
let processH2 = document.querySelector(".process .container>h2");
let processContainer = document.querySelector(".process .process-steps");
let processData = [
  {
    icon: "fa-regular fa-circle-question",
    ar: {
      title: "الاستشارة",
      p: "يدرس فريقنا موقعك والكاميرات الحالية وأهدافك التشغيلية والأمنية لتحديد الحل الأنسب لك.",
    },
    en: {
      title: "Consultation",
      p: "Our team analyzes your site, existing cameras, and monitoring goals to understand your operational and security needs.",
    },
  },
  {
    icon: "fa-solid fa-microchip",
    ar: {
      title: "دمج الذكاء الاصطناعي",
      p: "نربط كاميراتك الحالية بمنصة رقيب دون الحاجة إلى أجهزة جديدة أو تعديلات على البنية التحتية.",
    },
    en: {
      title: "AI Integration",
      p: "We connect your existing CCTV cameras to the Rgeeb AI platform. No hardware replacement or infrastructure changes are required.",
    },
  },
  {
    icon: "fa-solid fa-video",
    ar: {
      title: "المراقبة الذكية",
      p: "يبدأ النظام بتحليل الفيديو مباشرةً لاكتشاف السلوكيات والمخاطر والأنشطة التشغيلية وإرسال التنبيهات اللازمة.",
    },
    en: {
      title: "Smart Monitoring",
      p: "The AI system begins analyzing video streams in real time, detecting behaviors, safety risks, and operational activities.",
    },
  },
];
processSteps();

// our services

let ourServicesTitle = document.querySelector(".our-services .sec-title");
let ourServicesH2 = document.querySelector(".our-services .container>h2");
let ourServicesContainer = document.querySelector(
  ".our-services .the-services",
);
let ourServicesData = [
  {
    icon: "fa-solid fa-gas-pump",
    img: "media/services/gas-station.png",
    href: "gas/gas.html",
    ar: {
      title: "محطات الوقود",
      p: "مراقبة ذكية لعمليات المضخات، ومخاطر السلامة، والتزام الموظفين، والحركة التشغيلية داخل محطة الوقود.",
      a: "اقرأ المزيد",
    },
    en: {
      title: "gas stations",
      p: "AI monitoring for pump operations, safety risks, employee compliance, and fuel station activity.",
      a: "read more",
    },
  },
  {
    icon: "fa-solid fa-utensils",
    img: "media/services/restaurant.png",
    href: "restaurant/restaurant.html",
    ar: {
      title: "المطاعم والمتاجر",
      p: "تحليلات ذكية لسرعة الخدمة، وأداء الموظفين، وفهم حركة الطلب، وتعزيز السلامة داخل بيئة العمل.",
      a: "اقرأ المزيد",
    },
    en: {
      title: "Restaurant And Stores",
      p: "AI analytics for service speed, staff behavior, demand insights, and workplace safety.",
      a: "read more",
    },
  },
  {
    icon: "fa-solid fa-dumbbell",
    img: "media/services/gyms.png",
    href: "gyms/gyms.html",
    ar: {
      title: "النوادي الرياضية",
      p: "مراقبة ذكية لاستخدام الأجهزة، وتواجد المدربين، وحركة الأعضاء، ومستوى السلامة داخل النادي.",
      a: "اقرأ المزيد",
    },
    en: {
      title: "gyms",
      p: "AI monitoring for equipment usage, trainer presence, member activity, and gym safety.",
      a: "read more",
    },
  },
  {
    icon: "fa-solid fa-school",
    img: "media/services/schools.png",
    href: "schools/schools.html",
    ar: {
      title: "المدارس",
      p: "مراقبة ذكية لحضور الطلاب، وسلامة الحرم المدرسي، ورصد السلوكيات، وتحسين كفاءة التشغيل داخل المدارس.",
      a: "اقرأ المزيد",
    },
    en: {
      title: "schools",
      p: "AI monitoring for student attendance, campus safety, behavior detection, and smart school operations.",
      a: "read more",
    },
  },
  {
    icon: "fa-solid fa-staff-snake",
    img: "media/services/pharmacy-service.png",
    href: "pharmacies/pharmacies.html",
    ar: {
      title: "الصيدليات",
      p: "مراقبة ذكية لأنشطة نقاط البيع، وتوفر الرفوف، وأمان التخزين، وحركة طوابير العملاء، بما يساهم في تحسين كفاءة التشغيل وجودة الخدمة داخل الصيدلية.",
      a: "اقرأ المزيد",
    },
    en: {
      title: "pharmacies",
      p: "AI monitoring for cashier activity, shelf availability, storage security, and customer queues to improve pharmacy operations and service efficiency.",
      a: "read more",
    },
  },
];
ourServices();
