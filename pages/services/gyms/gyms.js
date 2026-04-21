htmlFun();
theLangBtn("../../../gb.svg", "../../../sa.svg");
header("../../../");
footerText();

// big Hero

let bigHero = document.querySelector(".big-hero h1");
bigHeroText();

// main sec

let mainSecH2 = document.querySelector(".main-sec h2");
let mainSecP = document.querySelector(".main-sec p");
let mainSecUl = document.querySelector(".main-sec ul");
let mainSecData = {
  ar: {
    h2: "المراقبة الذكية للصالات الرياضية",
    p: "توفر المراقبة المدعومة بالذكاء الاصطناعي تحليلاً لنشاط الأجهزة الرياضية، وحضور المدربين، وتفاعل الأعضاء داخل مرافق اللياقة البدنية. تساعد رقيب مديري الصالات الرياضية على تعزيز السلامة، ومتابعة الأداء التشغيلي، والحفاظ على بيئة تدريب أكثر تنظيمًا من خلال رؤى لحظية دقيقة.",
    ulText: [
      "متابعة استخدام الأجهزة الرياضية ونشاط التمارين",
      "تتبع حضور المدربين وتنظيم الحصص التدريبية",
      "رصد الحالات غير الطبيعية ومخاطر السلامة",
    ],
  },
  en: {
    h2: "AI Monitoring for Gyms",
    p: "AI-powered monitoring that analyzes equipment usage, trainer presence, and member activity inside fitness facilities. Rgeeb helps gym managers improve safety, track operational performance, and maintain better training environments through real-time insights.",
    ulText: [
      "Monitor equipment usage and training activity",
      "Track trainer presence and class operations",
      "Detect abnormal situations and safety risks",
    ],
  },
};
mainSec();

// general features

let generalFeaturesh2 = document.querySelector(".general-features h2");
let generalFeaturesP = document.querySelector(".general-features .container>p");
let generalFeaturesContainer = document.querySelector(
  ".general-features .features",
);
let generalFeaturesData = [
  {
    ar: {
      h3: "مراقبة استخدام الأجهزة الرياضية",
      p: "تحليل كيفية استخدام أجهزة الصالة الرياضية خلال اليوم لفهم سلوك الأعضاء وتحسين توزيع الأجهزة داخل الصالة.",
    },
    en: {
      h3: "Equipments Usage Monitoring",
      p: "Analyze how gym equipment is used throughout the day to understand member behavior and optimize equipment distribution.",
    },
  },
  {
    ar: {
      h3: "تتبع حضور المدربين",
      p: "متابعة وجود المدربين داخل مناطق التدريب والتأكد من الالتزام بالجداول والحصص التدريبية.",
    },
    en: {
      h3: "Trainer Presence Tracking",
      p: "Monitoring the presence of trainers within the training areas and ensuring adherence to schedules and training sessions.",
    },
  },
  {
    ar: {
      h3: "اكتشاف المخاطر ومشكلات السلامة",
      p: "رصد الحالات غير الطبيعية، أو التمارين غير الآمنة، أو مناطق الازدحام للمساعدة في الحفاظ على بيئة تدريب أكثر أماناً.",
    },
    en: {
      h3: "Safety and risk Detection",
      p: "Detect abnormal situations, unsafe exercises, or crowded areas to help maintain a safer training environment.",
    },
  },
];
generalFeatures();

// services divs

let servicesDivsData = [
  {
    vid: "media/services/gyms/vid_1.mp4",
    ar: {
      title: "تحليل استخدام الأجهزة ونشاط التدريب",
      p1: "يقوم النظام بمراقبة نشاط الأجهزة الرياضية داخل الصالة لفهم أي الأجهزة تُستخدم بشكل أكبر ومتى تحدث فترات الذروة في التدريب.",
      p2: "ومن خلال تحليل أنماط استخدام الأجهزة والتأكد من أداء التمارين بالشكل الصحيح، يحصل مديرو الصالات الرياضية على رؤى قيّمة تساعد على تحسين إدارة المرافق وتعزيز سلامة الأعضاء.",
      ulText: [
        "تحديد الأجهزة الرياضية الأكثر استخداماً",
        "اكتشاف ساعات الذروة في التدريب تلقائياً",
        "مراقبة تنفيذ التمارين بالشكل الصحيح",
        "تحسين تخطيط الأجهزة وتعزيز سلامة الأعضاء",
      ],
    },
    en: {
      title: "Analyze Equipment Usage and Training Activity",
      p1: "The system monitors activity across gym equipment to understand which machines are used most frequently and when peak training periods occur.",
      p2: "By analyzing equipment usage patterns and detecting whether exercises are performed correctly, gym managers gain valuable insights to improve facility management and member safety.",
      ulText: [
        "Identify the most frequently used gym equipment",
        "Detect peak training hours automatically",
        "Monitor whether exercises are performed correctly",
        "Improve equipment planning and member safety",
      ],
    },
  },
  {
    vid: "media/services/gyms/vid_2.mp4",
    ar: {
      title: "مراقبة حضور المدربين ونشاط الحصص التدريبية",
      p1: "يقوم النظام بمتابعة حضور المدربين والتأكد من وجودهم في مناطق التدريب المخصصة خلال الجلسات المجدولة.",
      p2: "ومن خلال تتبع حركة المدربين ونشاطهم داخل مناطق الصالة، يمكن للإدارة التأكد من تنفيذ الحصص كما هو مخطط لها والحفاظ على مستوى خدمة ثابت للأعضاء.",
      ulText: [
        "التحقق من حضور المدربين تلقائياً",
        "ضمان بقاء المدربين في مناطق التدريب المخصصة",
        "التأكد من تنفيذ الحصص التدريبية المجدولة",
        "تحسين الرقابة التشغيلية وتعزيز المساءلة بين فريق العمل",
      ],
    },
    en: {
      title: "Monitor Trainer Presence and Class Activity",
      p1: "The system monitors trainer attendance and verifies that instructors are present in their assigned training areas during scheduled sessions.",
      p2: "By tracking trainer movement and activity across gym zones, managers can ensure classes are conducted as planned and maintain consistent service quality for members.",
      ulText: [
        "Verify trainer attendance automatically",
        "Ensure trainers remain in their assigned training zones",
        "Confirm scheduled classes are taking place",
        "Improve operational control and staff accountability",
      ],
    },
  },
  {
    vid: "media/services/gyms/vid_3.mp4",
    ar: {
      title: "قياس رضا العملاء عبر تحليل المشاعر",
      p1: "يقوم النظام بتحليل تعابير الوجه والإشارات العاطفية لتقدير مستوى رضا العملاء أثناء وجودهم داخل الصالة الرياضية.",
      p2: "ومن خلال فهم كيفية تفاعل الأعضاء أثناء التمارين أو الحصص التدريبية، يحصل المديرون على رؤى مهمة حول تجربة الأعضاء بشكل عام ويمكنهم تحديد الجوانب التي تحتاج إلى تحسين.",
      ulText: [
        "تحليل مشاعر العملاء أثناء جلسات التدريب",
        "تقدير مستوى الرضا من خلال تعابير الوجه",
        "تحديد التجارب الإيجابية أو السلبية للأعضاء",
        "تحسين جودة الخدمة وزيادة ولاء الأعضاء",
      ],
    },
    en: {
      title: "Measure Customer Satisfaction Through Emotion Analysis",
      p1: "The system analyzes facial expressions and emotional cues to estimate customer satisfaction during their time inside the gym.",
      p2: "By understanding how members react during workouts, classes, and interactions, managers gain valuable insights into overall member experience and can identify areas that need improvement.",
      ulText: [
        "Analyze customer emotions during gym sessions",
        "Estimate satisfaction levels from facial expressions",
        "Identify positive or negative member experiences",
        "Improve service quality and member retention",
      ],
    },
  },
];
servicesDiv();

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
