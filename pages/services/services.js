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
