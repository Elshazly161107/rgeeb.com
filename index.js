// html

htmlFun();

// lang btn

theLangBtn("gb.svg", "sa.svg");

// header

header("");

// face page

let facePageTextData = [
  {
    ar: "مرحبًا بك في الجيل الأعلى من الحماية الذكية",
    en: "Welcome to Highest level of AI protection",
  },
  {
    ar: "مع رقيب، يبدأ مستوى جديد من الأمان الذكي",
    en: "Rgeeb is the power of AI security",
  },
];
let slides = document.querySelectorAll(".face-page .bg-img");
let slidesIndex = 0;
let slidesText = document.querySelector(".face-page .text h1");
facePage();
setInterval(() => {
  slides[slidesIndex].classList.remove("active");
  slidesIndex = (slidesIndex + 1) % slides.length;
  slidesText.classList.add("active");
  setTimeout(() => {
    facePage();
    slidesText.classList.remove("active");
  }, 200);
  slides[slidesIndex].classList.add("active");
}, 7000);

// home about us

let homeAboutUsTitle = document.querySelector(".home-about-us .sec-title");
let homeAboutUsH2 = document.querySelector(".home-about-us h2");

homeAboutUs();

// home services

let homeServicesData = [
  {
    img: "media/img1.png",
    ar: {
      h3: "تحليلات ذكية لمواقف السيارات ونسب الإشغال",
      p: "مراقبة ذكية لمواقف السيارات الداخلية تعتمد على الذكاء الاصطناعي، لمتابعة إشغال المواقف وتعزيز سلامة المشاة بشكل لحظي.",
    },
    en: {
      h3: "AI Smart Parking & Occupancy Analytics",
      p: "AI-powered monitoring for indoor parking areas, tracking space occupancy, and pedestrian safety in real time.",
    },
  },
  {
    img: "media/img3.jpeg",
    ar: {
      h3: "مراقبة الالتزام بإجراءات السلامة عبر كاميرات الذكاء الاصطناعي",
      p: "تحليلات فيديو لحظية بالذكاء الاصطناعي تتابع تلقائيًا التزام الموظفين بإجراءات السلامة والنظافة داخل بيئة العمل والإنتاج.",
    },
    en: {
      h3: "AI CCTV Safety Compliance Monitoring",
      p: "Real-time AI video analytics that automatically tracks staff and hygiene compliance across your production floor.",
    },
  },
  {
    img: "media/img2.jpeg",
    ar: {
      h3: "مراقبة ذكية لمحيط الموقع ومواقف السيارات",
      p: "مراقبة فيديو ذكية بالذكاء الاصطناعي لرصد المركبات والتحركات المريبة حول منشأتك بشكل فوري.",
    },
    en: {
      h3: "AI Perimeter & Parking Surveillance",
      p: "Smart AI video monitoring for vehicles, and suspicious activity in real time around your property.",
    },
  },
];

let homeServicesTitle = document.querySelector(".home-services .sec-title");
let homeServicesH2 = document.querySelector(".home-services h2");
let homeServicesContainer = document.querySelector(
  ".home-services .the-services",
);

homeServices();

// we provides

let weProvidesTitle = document.querySelector(".we-provides .sec-title");
let weProvidesH2 = document.querySelector(".we-provides h2");
let weProvidesData = [
  {
    ar: {
      h3: "للقطاع السكني",
      p: "نوفّر لمنازلكم مستوى متقدماً من الحماية الذكية المدعومة بالذكاء الاصطناعي، حيث يراقب نظامنا المنزل بشكل استباقي على مدار الساعة، بدعم من فريق متخصص جاهز دائماً لضمان راحتكم وطمأنينتكم.",
    },
    en: {
      h3: "Residential",
      p: "We bring state-of-the-art AI security to your doorstep. Our smart system proactively monitors your home, backed by a dedicated team available 24/7 for your peace of mind.",
    },
  },
  {
    ar: {
      h3: "لقطاع الأعمال والشركات",
      p: "امنح أعمالك مستوى أعلى من الرقابة الذكية من خلال تقنيات متقدمة مصممة خصيصاً لاحتياجات الشركات، بما يضمن حماية الأصول واستمرارية المتابعة مع دعم احترافي متاح دائماً عند الحاجة.",
    },
    en: {
      h3: "Corporate",
      p: "Empower your business with intelligent monitoring. We provide cutting-edge AI technology tailored for corporate needs, ensuring asset protection with expert support always within reach.",
    },
  },
];
let weProvidesContainer = document.querySelector(".we-provides .text>div");

weProvides();

// home fqa

let homeFqaTitle = document.querySelector(".home-fqa .sec-title");
let homeFqaQuestionsData = [
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
let homeFqaQuestionsContainer = document.querySelector(".home-fqa .questions");
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
homeFqa();

// clints comments

let clintsCommentsTitle = document.querySelector(".clints-comments .sec-title");
let clintsCommentsContainer = document.querySelector(
  ".clints-comments .comments",
);
let clintsCommentsData = [
  {
    img: "media/comment1.png",
    stars: 4,
    ar: {
      name: "عبدالرحمن",
      job: "مدير تشغيل",
      text: "ساعدنا رقيب في مراقبة النشاط في جميع أنحاء منشأتنا دون تغيير كاميراتنا الحالية. تنبيهات الذكاء الاصطناعي مفيدة للغاية.",
    },
    en: {
      name: "Abdulrahman",
      job: "Operations Manager",
      text: "Rgeeb helped us monitor activity across our facility without changing our existing cameras. The AI alerts are extremely helpful",
    },
  },
  {
    img: "media/comment2.png",
    stars: 5,
    ar: {
      name: "أحمد",
      job: "مسؤول أمن",
      text: "لقد تمكنا من تحسين الرؤية التشغيلية عبر مناطق متعددة باستخدام البنية التحتية الحالية لكاميرات المراقبة التلفزيونية المغلقة.",
    },
    en: {
      name: "Ahmed",
      job: "Security Supervisor",
      text: "We were able to improve operational visibility across multiple areas using our current CCTV infrastructure.",
    },
  },
  {
    img: "media/comment3.png",
    stars: 5,
    ar: {
      name: "لين",
      job: "مديرة مدرسة",
      text: "لقد سهّل النظام كثيراً تتبع الحوادث الأمنية والسلوك غير المعتاد في الوقت الفعلي.",
    },
    en: {
      name: "Leen",
      job: "School Administrator",
      text: "The system made it much easier to track safety incidents and unusual behavior in real time.",
    },
  },
];

clintsComments();

// footer form

footerText();
