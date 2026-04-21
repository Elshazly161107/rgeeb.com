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
    h2: "المراقبة الذكية للصيدليات",
    p: "يوفّر نظام المراقبة المدعوم بالذكاء الاصطناعي تحليلاً لنشاط الصيدلية يشمل عمليات البيع، ونشاط الكاشير، ومناطق التخزين والمخزون، إضافة إلى حركة العملاء داخل الصيدلية. تساعد منصة رقيب مديري الصيدليات على اكتشاف المشكلات التشغيلية، وحماية الأدوية الحساسة، وتحسين كفاءة الخدمة باستخدام كاميرات المراقبة الموجودة مسبقًا.",
    ulText: [
      "مراقبة نشاط الكاشير وسلامة عمليات البيع",
      "اكتشاف الرفوف الفارغة واحتياجات إعادة التزويد",
      "حماية مناطق تخزين الأدوية المقيّدة",
    ],
  },
  en: {
    h2: "AI Monitoring for Pharmacies",
    p: "AI-powered monitoring that analyzes pharmacy operations, cashier activity, inventory areas, and customer service flow. Rgeeb helps pharmacy managers detect operational issues, protect valuable medicines, and improve service efficiency using existing CCTV cameras.",
    ulText: [
      "Monitor cashier activity and transaction integrity",
      "Detect empty shelves and restocking needs",
      "Protect restricted medicine storage areas",
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
      h3: "مراقبة الموظفين وعمليات البيع",
      p: "يقوم النظام بمراقبة نشاط الكاشير وحركة المنتجات عند نقطة الدفع للتأكد من تسجيل جميع العمليات بشكل صحيح. كما يمكنه اكتشاف خروج منتجات دون تسجيل، ومتابعة نشاط الموظفين، وتوفير رؤية أوضح لإدارة الصيدلية حول العمليات اليومية.",
    },
    en: {
      h3: "Employee & Checkout Monitoring",
      p: "Monitor cashier activity and product movement at the checkout to ensure transactions are properly recorded. The system can detect unrecorded product exits, observe employee activity, and provide better visibility over daily pharmacy operations.",
    },
  },
  {
    ar: {
      h3: "حماية المخزون ومناطق التخزين",
      p: "يراقب النظام رفوف الصيدلية ومناطق التخزين لاكتشاف الرفوف الفارغة أو الوصول غير المصرح به إلى الأدوية الحساسة، إضافة إلى رصد أي مشاكل في التعامل مع المخزون، مما يساعد على حماية الأدوية القيمة وضمان توفرها للعملاء.",
    },
    en: {
      h3: "Inventory & Storage Protection",
      p: "Monitor pharmacy shelves and storage areas to detect empty shelves, restricted inventory access, and potential stock handling issues. The system helps ensure valuable medicines are properly protected and available for customers.",
    },
  },
  {
    ar: {
      h3: "تحليل حركة العملاء وكفاءة الخدمة",
      p: "يقوم النظام بتحليل حركة العملاء وطوابير الانتظار عند الكاشير لاكتشاف نقاط الاختناق في الخدمة. وعند ازدياد الازدحام يمكن للنظام تنبيه الموظفين لفتح نقاط دفع إضافية والحفاظ على تجربة خدمة أكثر سلاسة.",
    },
    en: {
      h3: "Customer Flow & Service Efficiency",
      p: "Analyze customer movement and waiting lines at the cashier to detect service bottlenecks. When queues grow, the system can notify staff to open additional checkout points and maintain a smoother customer experience.",
    },
  },
];
generalFeatures();

// services divs

let servicesDivsData = [
  {
    vid: "media/services/pharmacies/vid_1.mp4",
    ar: {
      title: "مراقبة عمليات الدفع وتوفر المنتجات على الرفوف",
      p1: "يقوم رقيب بتحليل بث الكاميرات الحي من داخل المتجر لمراقبة عمليات الدفع وحالة الرفوف بشكل لحظي. يساعد النظام الإدارة على متابعة نشاط الكاشير، وتحسين وضوح العمليات داخل المتجر، واكتشاف الرفوف الفارغة أو التي تحتاج إلى إعادة تزويد بالمنتجات.",
      p2: "بفضل تحليلات الفيديو المدعومة بالذكاء الاصطناعي، يمكن لفرق البيع بالتجزئة والصيدليات الاستجابة بسرعة للمشكلات التشغيلية، والحفاظ على توفر المنتجات، والحصول على رؤية أوضح لما يحدث داخل المتجر.",
      ulText: [
        "متابعة نشاط الكاشير وعمليات الدفع باستمرار",
        "اكتشاف الرفوف الفارغة واحتياجات إعادة التزويد",
        "تحسين وضوح العمليات داخل المتجر",
        "دعم الاستجابة السريعة لمشكلات عرض المنتجات",
      ],
    },
    en: {
      title: "Monitor Checkout Operations and Shelf Availability",
      p1: "Rgeeb analyzes live video streams from existing store cameras to monitor checkout operations and shelf conditions in real time. The system helps managers oversee caisse activity, improve service visibility, and identify shelf areas that appear empty or require restocking.",
      p2: "With AI-powered video analytics, retail and pharmacy teams can respond faster to operational issues, maintain better product availability, and gain clearer visibility across the store environment.",
      ulText: [
        "Monitor cashier and checkout activity continuously",
        "Detect empty shelves and restocking needs",
        "Improve in-store operational visibility",
        "Support faster response to product display issues",
      ],
    },
  },
  {
    vid: "media/services/pharmacies/vid_2.mp4",
    ar: {
      title: "ضمان تسجيل كل منتج بشكل صحيح عند نقطة الدفع",
      p1: "يقوم رقيب بتحليل نشاط الكاشير وحركة المنتجات عند نقطة الدفع للتأكد من أن كل منتج يغادر المتجر يتم تسجيله بشكل صحيح في نظام الفوترة.",
      p2: "باستخدام تحليلات الفيديو بالذكاء الاصطناعي، يراقب النظام حركة الأيدي ونقل المنتجات أثناء عملية الدفع ويطابقها مع الفواتير المسجلة. وإذا خرج منتج من منطقة الكاشير دون تسجيله في نظام نقاط البيع (POS)، يقوم النظام بتنبيه الإدارة لمراجعة الحالة. يساعد ذلك الشركات على تقليل التلاعب المالي، وتعزيز شفافية العمليات، وتحسين السيطرة التشغيلية عند الكاشير.",
      ulText: [
        "مراقبة نشاط الكاشير وحركة المنتجات عند نقطة الدفع",
        "مطابقة حركة المنتجات مع الفواتير المسجلة",
        "اكتشاف خروج منتجات غير مسجلة من منطقة الكاشير",
        "تقليل الخسائر المالية ومخاطر الاحتيال الداخلي",
      ],
    },
    en: {
      title: "Ensure Every Product Is Properly Recorded at Checkout",
      p1: "Rgeeb analyzes cashier activity and product movement at the checkout counter to ensure that every item leaving the store is properly registered in the billing system.",
      p2: "Using AI video analytics, the platform observes hand movements and product transfers during transactions and correlates them with issued bills. If a product exits the counter area without being recorded in the POS system, the system can flag the event for review. This allows businesses to prevent financial manipulation, improve transaction transparency, and maintain better operational control at the cashier.",
      ulText: [
        "Monitor cashier activity and product movement at checkout",
        "Correlate physical transactions with issued bills",
        "Detect unrecorded product exits from the cashier",
        "Reduce financial losses and internal fraud risks",
      ],
    },
  },
  {
    vid: "media/services/pharmacies/vid_3.mp4",
    ar: {
      title: "حماية المخزون عالي القيمة ومناطق التخزين المقيدة",
      p1: "يقوم رقيب بمراقبة غرف التخزين والمستودعات عبر تحليل بث الكاميرات باستخدام الذكاء الاصطناعي. يستطيع النظام اكتشاف الدخول أو النشاط في المناطق التي يتم فيها تخزين المنتجات الحساسة أو عالية القيمة.",
      p2: "عند رصد حركة في مناطق مقيدة أو خارج الظروف التشغيلية الطبيعية، يمكن للنظام إرسال تنبيهات فورية للإدارة لمراجعة الحدث واتخاذ الإجراء المناسب. يساعد ذلك الشركات على حماية المخزون القيم، وتقليل المخاطر الداخلية، والحفاظ على رؤية أوضح لمناطق التخزين.",
      ulText: [
        "مراقبة الوصول إلى المستودعات ومناطق التخزين",
        "اكتشاف الدخول إلى مناطق المخزون المقيدة",
        "حماية المنتجات القيمة أو الخاضعة للرقابة",
        "تلقي تنبيهات فورية عند حدوث نشاط غير طبيعي",
      ],
    },
    en: {
      title: "Protect High-Value Inventory and Restricted Storage Areas",
      p1: "Rgeeb monitors storage rooms and warehouse zones using AI analysis of existing camera feeds. The system detects entry and activity in areas where sensitive or high-value inventory is stored.",
      p2: "When movement is detected in restricted zones or outside normal operational conditions, managers can receive alerts to review the event immediately. This helps businesses protect valuable stock, reduce internal risks, and maintain better visibility over inventory storage areas.",
      ulText: [
        "Monitor warehouse and storage area access",
        "Detect entry into restricted inventory zones",
        "Protect valuable and controlled products",
        "Receive alerts for unusual or unauthorized activity",
      ],
    },
  },
  {
    vid: "media/services/pharmacies/vid_4.mp4",
    ar: {
      title: "ضمان ظروف التخزين المناسبة للأدوية",
      p1: "يساعد رقيب الصيدليات على مراقبة بيئات التخزين لضمان حفظ الأدوية ضمن درجات الحرارة المناسبة. ومن خلال تحليل النشاط في مناطق التخزين وربط النظام مع أنظمة المراقبة البيئية، توفر المنصة رؤية إضافية حول ظروف تخزين الأدوية الحساسة.",
      p2: "يمكن للإدارة تلقي تنبيهات عند الحاجة إلى الانتباه للظروف البيئية، مما يساعد على الحفاظ على جودة الأدوية والالتزام بمعايير التخزين الدوائية.",
      ulText: [
        "مراقبة مناطق التخزين الحساسة لدرجة الحرارة",
        "الحفاظ على ظروف التخزين الصحيحة للأدوية",
        "اكتشاف أي نشاط غير طبيعي قرب مناطق التخزين",
        "تحسين الالتزام بمتطلبات التخزين الدوائية",
      ],
    },
    en: {
      title: "Ensure Proper Temperature Conditions for Medicine Storage",
      p1: "Rgeeb helps pharmacies monitor storage environments to ensure medicines are kept within proper temperature conditions. By analyzing activity around storage areas and integrating with monitoring systems, the platform provides additional visibility over sensitive medicine storage.",
      p2: "Managers can be notified when conditions require attention, helping ensure medicine quality and compliance with proper storage standards.",
      ulText: [
        "Monitor temperature-sensitive storage areas",
        "Maintain proper medicine storage conditions",
        "Detect unusual activity around storage zones",
        "Improve compliance with pharmaceutical storage requirements",
      ],
    },
  },
  {
    vid: "media/services/pharmacies/vid_5.mp4",
    ar: {
      title: "تقليل وقت الانتظار عند الكاشير عبر اكتشاف الطوابير",
      p1: "يقوم رقيب بمراقبة منطقة الكاشير لاكتشاف طوابير العملاء وخطوط الانتظار بشكل لحظي. ومن خلال تحليل النشاط حول نقاط الدفع، يستطيع النظام تحديد متى تبدأ الطوابير بالازدياد.",
      p2: "عند تجاوز الطوابير المستوى الطبيعي، يمكن للنظام تنبيه الموظفين لفتح كاشير إضافي، مما يساعد على تسريع الخدمة وتحسين تجربة التسوق داخل المتجر.",
      ulText: [
        "اكتشاف طوابير الانتظار عند الكاشير",
        "مراقبة ازدياد الطوابير خلال أوقات الذروة",
        "تنبيه الموظفين عند الحاجة لفتح كاشير إضافي",
        "تحسين سرعة الخدمة ورضا العملاء",
      ],
    },
    en: {
      title: "Reduce Checkout Waiting Time with Queue Detection",
      p1: "Rgeeb monitors the checkout area to detect customer queues and waiting lines in real time. By analyzing activity around the cashier, the system can identify when waiting lines begin to grow.",
      p2: "When queues exceed normal levels, the platform can notify staff to open an additional cashier, helping maintain faster service and smoother store operations.",
      ulText: [
        "Detect customer waiting lines at the cashier",
        "Monitor queue buildup during busy periods",
        "Notify staff when an additional cashier is needed",
        "Improve checkout efficiency and customer satisfaction",
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
