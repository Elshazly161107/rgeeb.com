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
    h2: "المراقبة الذكية للمطاعم ومتاجر التجزئة",
    p: "مراقبة ذكية مدعومة بالذكاء الاصطناعي لتحليل سير الخدمة، ونشاط الموظفين، وسلوك العملاء داخل المطاعم ومتاجر التجزئة. تساعد رقيب الإدارات على رفع الكفاءة التشغيلية، واكتشاف مشكلات السلامة، وتحسين تجربة العملاء.",
    ulText: [
      "متابعة نشاط الموظفين وسير العمليات التشغيلية",
      "تحليل حركة العملاء وكفاءة الخدمة",
      "رصد مخالفات السلامة والحالات غير الطبيعية",
    ],
  },
  en: {
    h2: "AI Monitoring for Restaurants & Retail Stores",
    p: "AI-powered monitoring that analyzes service flow, employee activity, and customer behavior inside restaurants and retail stores. Rgeeb helps managers improve operational efficiency, detect safety issues, and optimize customer experience.",
    ulText: [
      "Monitor employee activity and service operations",
      "Analyze customer flow and service efficiency",
      "Detect safety violations and abnormal situations",
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
      h3: "مراقبة سلوك الموظفين",
      p: "متابعة نشاط الموظفين لضمان الالتزام بالإجراءات التشغيلية والحفاظ على معايير السلامة في بيئة العمل.",
    },
    en: {
      h3: "Employee Behavior Monitoring",
      p: "Monitor staff activity to ensure employees follow operational procedures and maintain workplace safety standards.",
    },
  },
  {
    ar: {
      h3: "تحليل حركة العملاء",
      p: "متابعة حركة العملاء ومدة الانتظار لتحسين كفاءة الخدمة وتقليل الاختناقات التشغيلية.",
    },
    en: {
      h3: "Customer Flow Analysis",
      p: "Track customer movement and waiting time to improve service efficiency and reduce operational bottlenecks.",
    },
  },
  {
    ar: {
      h3: "رؤى تشغيلية",
      p: "توفير رؤى حول أنماط النشاط اليومي، بما يساعد الإدارات على تحسين سير العمل ورفع أداء الموظفين.",
    },
    en: {
      h3: "Operational Insights",
      p: "Generate insights about daily activity patterns, helping managers improve workflows and optimize staff performance.",
    },
  },
];
generalFeatures();

// services divs

let servicesDivsData = [
  {
    vid: "media/services/restaurant-stores/vid_1.mp4",
    ar: {
      title: "تتبع مبيعات المشروبات والطلب على المنتجات",
      p1: "يقوم النظام بتحليل نشاط تحضير المشروبات لرصد عدد أكواب القهوة المحضّرة تلقائيًا وتحديد أنواع المشروبات التي يتم تقديمها خلال اليوم.",
      p2: "ويحصل المديرون على رؤى دقيقة حول أنماط المبيعات اليومية ومستوى الطلب على المنتجات وتفضيلات العملاء، دون الاعتماد فقط على التقارير اليدوية.",
      ulText: [
        "حساب عدد أكواب القهوة المحضّرة تلقائيًا",
        "تحديد أنواع المشروبات الأكثر طلبًا",
        "تحليل نشاط المبيعات اليومية واتجاهات الطلب",
        "دعم التخطيط الأفضل للمخزون والمنتجات",
      ],
    },
    en: {
      title: "Track Beverage Sales and Product Demand",
      p1: "The system analyzes beverage preparation activity to automatically count coffee cups and identify which drinks are being served throughout the day.",
      p2: "Managers gain accurate insights into daily sales patterns, product demand, and customer preferences without relying only on manual reports.",
      ulText: [
        "Automatically count prepared coffee cups",
        "Identify the most requested beverage types",
        "Analyze daily sales activity and demand trends",
        "Support better inventory and product planning",
      ],
    },
  },
  {
    vid: "media/services/restaurant-stores/vid_2.mp4",
    ar: {
      title: "قياس وقت انتظار العملاء وسرعة الخدمة",
      p1: "يقوم النظام بتتبع المدة التي يقضيها العملاء تلقائيًا في مناطق الخدمة الرئيسية مثل منطقة الطلب أو نقطة الدفع.",
      p2: "ومن خلال قياس وقت الانتظار ومدة الخدمة، يحصل المديرون على رؤى واضحة حول كفاءة العمليات وحركة العملاء، مما يساعد على اكتشاف التأخيرات وتحسين سرعة الخدمة.",
      ulText: [
        "قياس مدة بقاء المركبات في منطقة الطلب",
        "تتبع وقت انتظار العملاء عند نقطة الدفع",
        "تحديد التأخيرات والاختناقات التشغيلية",
        "تحسين تجربة العملاء عبر تسريع الخدمة",
      ],
    },
    en: {
      title: "Measure Customer Wait Time and Service Speed",
      p1: "The system automatically tracks how long customers spend in key service areas such as the drive zone and payment counter.",
      p2: "By measuring waiting time and service duration, managers gain clear insights into operational efficiency and customer flow, helping them identify delays and improve service speed.",
      ulText: [
        "Measure how long vehicles stay in the drive zone",
        "Track customer waiting time at the payment counter",
        "Identify service delays and operational bottlenecks",
        "Improve customer experience through faster service",
      ],
    },
  },
  {
    vid: "media/services/restaurant-stores/vid_3.mp4",
    ar: {
      title: "مراقبة جودة خدمة العملاء والالتزام بالفواتير",
      p1: "يقوم النظام بتحليل تفاعل الموظفين مع العملاء للتأكد من الالتزام بإجراءات الخدمة. كما يتحقق مما إذا تم تسليم الفاتورة أو الإيصال للعميل، ويراقب سلوك الموظفين أثناء عملية الخدمة.",
      p2: "ومن خلال تقييم تصرفات الخدمة وتفاعل الموظفين مع العملاء، يحصل المديرون على رؤية أفضل لجودة الخدمة وأداء فريق العمل.",
      ulText: [
        "التأكد من تسليم الفاتورة أو الإيصال للعميل",
        "مراقبة تفاعل الموظفين أثناء الخدمة",
        "رصد السلوكيات الإيجابية مثل الترحيب أو الابتسامة",
        "تحسين تجربة العملاء وتوحيد مستوى الخدمة",
      ],
    },
    en: {
      title: "Monitor Customer Service and Invoice Compliance",
      p1: "The system analyzes employee interactions with customers to ensure service procedures are properly followed. It detects whether the receipt or invoice is handed to the customer and monitors employee behavior during the interaction.",
      p2: "By evaluating service actions and customer-facing behavior, managers gain better visibility into service quality and staff performance.",
      ulText: [
        "Detect whether the invoice or receipt is given to the customer",
        "Monitor employee interaction during service",
        "Identify friendly behaviors such as greeting or smiling",
        "Improve customer experience and service consistency",
      ],
    },
  },
  {
    vid: "media/services/restaurant-stores/vid_4.mp4",
    ar: {
      title: "مراقبة الالتزام بالنظافة وفترات الذروة",
      p1: "يقوم النظام بمراقبة المطبخ ومناطق الخدمة لضمان التزام الموظفين بمعايير النظافة، كما يحلل نشاط العملاء على مدار اليوم.",
      p2: "ومن خلال اكتشاف أوقات الذروة وتتبع وجود الموظفين في مناطق التشغيل، يمكن للإدارة الحفاظ على معايير الصحة وتنظيم توزيع الموظفين خلال ساعات الازدحام.",
      ulText: [
        "مراقبة التزام الموظفين بمعايير النظافة",
        "اكتشاف فترات الذروة تلقائيًا",
        "تحليل توزيع الموظفين في مناطق الخدمة",
        "تحسين التخطيط التشغيلي خلال أوقات الازدحام",
      ],
    },
    en: {
      title: "Monitor Hygiene Compliance and Peak Activity",
      p1: "The system monitors kitchen and service areas to ensure employees follow hygiene standards while also analyzing customer activity throughout the day.",
      p2: "By detecting peak periods and tracking staff presence in operational zones, managers can maintain health compliance and optimize staff distribution during busy hours.",
      ulText: [
        "Monitor employee compliance with hygiene standards",
        "Detect peak customer activity periods automatically",
        "Analyze staff distribution across service areas",
        "Improve operational planning during busy hours",
      ],
    },
  },
  {
    vid: "media/services/restaurant-stores/vid_5.mp4",
    ar: {
      title: "المراقبة الذكية للمتاجر والمطاعم",
      p1: "يقوم النظام بتحليل بث الكاميرات لمراقبة نشاط المتاجر والمطاعم بشكل تلقائي.",
      p2: "كما يمكنه اكتشاف الطاولات غير النظيفة، وتتبع نسبة الإشغال، وتحليل الظروف التشغيلية لمساعدة الإدارة على الحفاظ على جودة الخدمة.",
      ulText: [
        "اكتشاف الطاولات غير النظيفة تلقائيًا",
        "تتبع نشاط العملاء ونسبة الإشغال",
        "توفير رؤى تشغيلية لحظية",
      ],
    },
    en: {
      title: "AI Monitoring for Stores and Restaurants",
      p1: "The system analyzes video feeds to monitor store and restaurant activity automatically.",
      p2: "It can detect dirty tables, track occupancy, and measure operational conditions to help managers maintain service quality.",
      ulText: [
        "Detect dirty tables automatically",
        "Track customer activity and occupancy",
        "Provide real-time operational insights",
      ],
    },
  },
  {
    vid: "media/services/restaurant-stores/vid_6.mp4",
    ar: {
      title: "فهم ما يجذب انتباه العملاء",
      p1: "يقوم النظام بتحليل حركة العملاء وأنماط تفاعلهم داخل المتاجر والمقاهي لفهم ما يجذب اهتمامهم.",
      p2: "ومن خلال تحديد الأماكن التي يتوقف عندها العملاء أو يتفاعلون فيها مع المنتجات، يحصل المديرون على رؤى قيمة تساعد على تحسين عرض المنتجات والعروض الترويجية وتصميم المتجر لزيادة المبيعات.",
      ulText: [
        "تحليل حركة العملاء واهتمامهم داخل المتجر",
        "تحديد المنتجات أو المناطق الأكثر جذبًا للانتباه",
        "فهم سلوك العملاء قبل اتخاذ قرار الشراء",
        "تحسين عرض المنتجات لزيادة المبيعات",
      ],
    },
    en: {
      title: "Understand What Captures Customer Attention",
      p1: "The system analyzes customer movement and interaction patterns inside stores and coffee shop areas to understand what attracts customer attention.",
      p2: "By identifying where customers focus, stop, or interact with products, managers gain valuable insights that help optimize product placement, promotions, and store layout to increase sales.",
      ulText: [
        "Analyze customer movement and attention inside the store",
        "Identify which products or areas attract the most interest",
        "Understand customer behavior before purchase decisions",
        "Optimize product placement to increase sales",
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
