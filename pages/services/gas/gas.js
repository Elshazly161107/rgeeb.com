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
    h2: "المراقبة الذكية لمحطات الوقود بالذكاء الاصطناعي",
    p: "مراقبة ذكية مدعومة بالذكاء الاصطناعي لتحليل نشاط المضخات، وسلوك الموظفين، وحالة السلامة بشكل لحظي. تساعد رقيب مديري محطات الوقود على اكتشاف المخاطر مبكرًا، وتعزيز الالتزام بالإجراءات، والحفاظ على رؤية تشغيلية شاملة في جميع أنحاء المحطة.",
    ulText: [
      "متابعة نشاط المضخات ومواقع عمل الموظفين",
      "رصد مخاطر السلامة والسلوكيات الخطرة",
      "استقبال تنبيهات فورية ومؤشرات تشغيلية مهمة",
    ],
  },
  en: {
    h2: "AI Monitoring for Gas Stations",
    p: "AI-powered monitoring that analyzes pump activity, employee behavior, and safety conditions in real time. Rgeeb helps station managers detect risks early, enforce compliance, and maintain full operational visibility across the station.",
    ulText: [
      "Monitor pump activity and employee stations",
      "Detect safety risks and hazardous behavior",
      "Receive instant alerts and operational insights",
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
      h3: "التزام الموظفين بالإجراءات",
      p: "متابعة نشاط الموظفين والتأكد من التزامهم بمناطق العمل المخصصة لهم عند المضخات.",
    },
    en: {
      h3: "Employee Compliance",
      p: "Monitor staff activity and ensure employees remain within their assigned pump areas.",
    },
  },
  {
    ar: {
      h3: "مراقبة مناطق السلامة",
      p: "رصد دخول المركبات أو الأشخاص إلى مناطق تفريغ الوقود المقيّدة.",
    },
    en: {
      h3: "Safety Zone Monitoring",
      p: "Detect vehicles or people entering restricted fuel unloading zones.",
    },
  },
  {
    ar: {
      h3: "رؤى تشغيلية",
      p: "تحليل نشاط المحطة لتحسين الكفاءة ورفع مستوى المتابعة التشغيلية.",
    },
    en: {
      h3: "Operational Insights",
      p: "Analyze station activity to improve efficiency and operational awareness.",
    },
  },
];
generalFeatures();

// services divs

let servicesDivsData = [
  {
    vid: "media/services/gas/vid_1.mp4",
    ar: {
      title: "مراقبة التزام الموظفين بمواقع عملهم",
      p1: "يراقب النظام بشكل مستمر نشاط الموظفين في مختلف المضخات ومناطق العمل، ويكشف عند مغادرة الموظف لموقعه المخصص، أو بقائه دون نشاط، أو عمله في مناطق ليست ضمن مسؤوليته.",
      p2: "ويمنح ذلك الإدارة رؤية لحظية حول أداء فرق العمل، بما يساعد على ضمان بقاء الموظفين في مواقعهم المحددة والالتزام بالإجراءات التشغيلية المعتمدة.",
      ulText: [
        "رصد مغادرة الموظفين لمواقعهم المخصصة",
        "اكتشاف عمل الموظفين خارج نطاق مسؤولياتهم",
        "متابعة حضور الموظفين ونشاطهم التشغيلي",
        "تعزيز المساءلة والانضباط التشغيلي داخل المحطة",
      ],
    },
    en: {
      title: "Monitor Employee Station Compliance",
      p1: "The system continuously monitors employee activity across different pump stations and work areas. It detects when employees leave their assigned position, remain inactive, or operate in areas they are not responsible for.",
      p2: "Managers receive real-time visibility into workforce behavior, helping ensure that staff remain at their designated stations and operational procedures are followed.",
      ulText: [
        "Detect employees leaving their assigned station",
        "Identify workers operating outside their responsibility area",
        "Monitor staff presence and operational activity",
        "Improve workforce accountability across the station",
      ],
    },
  },
  {
    vid: "media/services/gas/vid_2.mp4",
    ar: {
      title: "حماية منطقة السلامة الخاصة بتفريغ الوقود",
      p1: "يراقب النظام بشكل مستمر منطقة تفريغ الوقود للتأكد من عدم دخول المركبات غير المصرح لها إلى المناطق المقيّدة أثناء عمليات التزويد.",
      p2: "وعند اقتراب مركبة غير مصرح لها أو بقائها داخل منطقة السلامة، يقوم النظام برصد الحالة تلقائيًا وإرسال تنبيه إلى فريق المحطة لتفادي المخاطر المحتملة.",
      ulText: [
        "رصد المركبات التي تدخل مناطق التفريغ المقيّدة",
        "ضمان بقاء منطقة التفريغ خالية من المركبات المدنية",
        "مراقبة المناطق عالية الخطورة بشكل لحظي",
        "إرسال تنبيهات عند مخالفة قواعد السلامة",
      ],
    },
    en: {
      title: "Protect the Fuel Unloading Safety Zone",
      p1: "The system continuously monitors the fuel unloading area to ensure that no civilian vehicles enter restricted zones during gasoline delivery operations.",
      p2: "If an unauthorized vehicle approaches or remains inside the unloading safety zone, the system automatically flags the situation and alerts station staff to prevent potential safety risks.",
      ulText: [
        "Detect vehicles entering restricted unloading zones",
        "Ensure the unloading area remains clear of civilian cars",
        "Monitor high-risk zones in real time",
        "Send alerts when safety rules are violated",
      ],
    },
  },
  {
    vid: "media/services/gas/vid_3.mp4",
    ar: {
      title: "رصد المركبات المغادرة دون سداد",
      p1: "يرصد النظام تلقائيًا المركبات التي تغادر المحطة بعد التزوّد بالوقود دون إتمام عملية الدفع.",
      p2: "وعند وقوع مثل هذه الحالة، يتم حفظ صورة المركبة وبياناتها التعريفية ومشاركتها بين الفروع المرتبطة والمحطات الأخرى العاملة بنظام رقيب. وإذا ظهرت المركبة نفسها مجددًا في أي محطة مراقبة، يتعرف عليها النظام فورًا ويُنبه الموظفين مباشرة.",
      ulText: [
        "رصد المركبات التي تغادر بعد التزوّد بالوقود دون دفع",
        "التقاط صورة المركبة وحفظها تلقائيًا",
        "مشاركة بيانات الحادثة بين المحطات المرتبطة",
        "تنبيه الموظفين عند ظهور المركبة نفسها مرة أخرى",
      ],
    },
    en: {
      title: "Detect Vehicles Leaving Without Payment",
      p1: "The system automatically detects vehicles that leave the station after fueling without completing a payment.",
      p2: "When such an incident occurs, the vehicle image and identifying details are recorded and shared across connected branches and other Raqib-enabled stations. If the same vehicle appears again at any monitored station, the system instantly detects it and alerts staff.",
      ulText: [
        "Detect vehicles leaving after fueling without payment",
        "Capture and store the vehicle image automatically",
        "Share incident data across connected stations",
        "Alert staff when the same vehicle reappears",
      ],
    },
  },
  {
    vid: "media/services/gas/vid_4.mp4",
    ar: {
      title: "قياس مدة خدمة العميل تلقائيًا",
      p1: "يتابع النظام تلقائيًا رحلة العميل كاملة داخل المحطة، منذ لحظة دخول المركبة إلى الموقع وحتى مغادرتها.",
      p2: "ومن خلال احتساب وقت الوصول، ومدة الخدمة، ووقت المغادرة، يحصل مديرو المحطة على مؤشرات دقيقة حول الأداء التشغيلي وحركة العملاء.",
      ulText: [
        "رصد أوقات دخول المركبات وخروجها تلقائيًا",
        "قياس مدة التزوّد بالوقود ومدة الخدمة",
        "تحليل حركة العملاء داخل المحطة",
        "تحسين الكفاءة التشغيلية وسرعة الخدمة",
      ],
    },
    en: {
      title: "Measure Customer Service Time Automatically",
      p1: "The system automatically tracks the full customer journey inside the station, from the moment a vehicle enters the premises until it leaves.",
      p2: "By calculating arrival time, service duration, and departure time, managers gain accurate insights into operational performance and customer flow.",
      ulText: [
        "Detect vehicle entry and exit times automatically",
        "Measure fueling and service duration",
        "Analyze customer flow inside the station",
        "Improve operational efficiency and service speed",
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
