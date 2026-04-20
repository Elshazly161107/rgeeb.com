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
      q: "ما هي منصة رقيب؟",
      ans: "رقيب هي منصة مراقبة ذكية مدعومة بالذكاء الاصطناعي، تقوم بتحليل البث الحي للكاميرات لحظياً لاكتشاف الأحداث المهمة، وإرسال تنبيهات ذكية، وتوفير لوحات تحكم تساعدك على متابعة موقعك واتخاذ قرارات أسرع وأكثر دقة.",
    },
    en: {
      q: "what is rgeeb?",
      ans: "Rgeeb is an AI-powered monitoring system that analyzes live camera feeds in real time to detect important events, generate smart alerts, and provide dashboards that help you monitor your site and make faster, better decisions.",
    },
    openingStatus: "open",
    btnIcon: "minus",
  },
  {
    ar: {
      q: "ما الذي يميز رقيب عن أنظمة المراقبة التقليدية؟",
      ans: "في أنظمة المراقبة التقليدية، يحتاج شخص ما إلى متابعة الشاشات بشكل مستمر ومراجعة التسجيلات يدوياً. أما رقيب فتعتمد على الذكاء الاصطناعي لمراقبة الموقع على مدار الساعة، وتمييز الأنشطة الطبيعية، واكتشاف الأحداث غير المعتادة، وتحويل ساعات طويلة من الفيديو إلى تنبيهات واضحة ومعلومات عملية قابلة للاستفادة.",
    },
    en: {
      q: "How is Rgeeb different from traditional CCTV monitoring?",
      ans: "With traditional systems, someone has to constantly watch the screens and manually review footage. Rgeeb uses AI to automatically monitor 24/7, filter out normal activity, detect unusual events, and turn hours of video into clear alerts and insights.",
    },
    openingStatus: "",
    btnIcon: "plus",
  },
  {
    ar: {
      q: "هل أحتاج إلى استبدال كاميرات المراقبة الحالية لاستخدام رقيب؟",
      ans: "في معظم الحالات، لا. صُممت Rgeeb لتعمل مع أغلب أنظمة كاميرات المراقبة الحديثة المعتمدة على بروتوكول IP، حيث يتم ربطها بالبنية الحالية لديك للاستفادة القصوى من الكاميرات الموجودة دون الحاجة إلى استبدالها.",
    },
    en: {
      q: "Do I need to replace my existing cameras to use Rgeeb?",
      ans: "In most cases, no. Rgeeb is designed to work with most modern IP-based camera systems. We simply connect to your existing infrastructure and help you get more value from the cameras you already have.",
    },
    openingStatus: "",
    btnIcon: "plus",
  },
  {
    ar: {
      q: "ما أنواع الأحداث التي تستطيع رقيب اكتشافها؟",
      ans: "يمكن تهيئة رقيب لاكتشاف مجموعة واسعة من الحالات، مثل التواجد في المناطق المقيّدة، والتجمعات غير المعتادة، والحركة خارج الأوقات المصرّح بها، والتجمهر في المواقع الحساسة، وغيرها من الأنماط التي قد تؤثر على السلامة أو الأمن أو كفاءة التشغيل، وذلك بحسب احتياجات موقعك.",
    },
    en: {
      q: "What kind of events can Rgeeb detect?",
      ans: "Rgeeb can be configured to detect cases such as: presence in restricted areas, unusual gatherings, movement during unauthorized hours, loitering in sensitive zones, and other patterns that may impact safety, security, or operations—depending on your site’s needs.",
    },
    openingStatus: "",
    btnIcon: "plus",
  },
  {
    ar: {
      q: "كيف يتعامل رقيب مع خصوصية البيانات وأمانها؟ ",
      ans: "نتعامل مع خصوصية البيانات وأمنها بأعلى درجات الجدية. يتم إدارة بث الفيديو والبيانات المرتبطة به وفق ضوابط صارمة للتحكم في الوصول، والتسجيل، والممارسات الأمنية، بما يضمن وصول المستخدمين المصرّح لهم فقط إلى المعلومات، مع الالتزام بمتطلبات البيئات المهنية والتشغيلية.",
    },
    en: {
      q: "How does Rgeeb handle data privacy and security?",
      ans: "We take privacy and security seriously. Video streams and related data are handled under strict access control, logging, and security practices, ensuring that only authorized users can access the information and that the system meets the requirements of professional environments.",
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
    img: "media/user-profile.jpg",
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
    img: "media/user-profile.jpg",
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
    img: "media/user-profile.jpg",
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
