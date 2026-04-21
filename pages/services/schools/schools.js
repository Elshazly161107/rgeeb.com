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
    h2: "المراقبة الذكية للمدارس",
    p: "يوفّر نظام المراقبة المدعوم بالذكاء الاصطناعي تحليلاً لحظيًا لنشاط الطلاب وعمليات الصفوف ومستوى السلامة داخل الحرم المدرسي. تساعد منصة رقيب المدارس على أتمتة متابعة الحضور، وحماية الطلاب، ومراقبة أداء المعلمين، وتحسين الكفاءة التشغيلية في مختلف مرافق المدرسة.",
    ulText: [
      "أتمتة متابعة حضور الطلاب والمعلمين",
      "رصد المخاطر السلوكية أو الحالات غير الطبيعية بين الطلاب",
      "متابعة نشاط الصفوف وأداء المعلمين",
    ],
  },
  en: {
    h2: "AI Monitoring for Schools",
    p: "AI-powered monitoring that analyzes student activity, classroom operations, and campus safety in real time. Rgeeb helps schools automate attendance, protect students, monitor teacher performance, and improve operational efficiency across the campus.",
    ulText: [
      "Automate student and teacher attendance monitoring",
      "Detect safety risks and abnormal student behavior",
      "Track classroom activity and teacher performance",
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
      h3: "مراقبة سلامة الطلاب",
      p: "رصد السلوكيات العدوانية أو التفاعلات المشبوهة أو الحالات غير الآمنة في الممرات والساحات ومناطق الأنشطة داخل المدرسة.",
    },
    en: {
      h3: "Student Safety Monitoring",
      p: "Detect aggressive behavior, suspicious interactions, or unsafe student situations across school corridors, playgrounds, and activity zones.",
    },
  },
  {
    ar: {
      h3: "تتبع الحضور الذكي",
      p: "الكشف التلقائي عن حضور الطلاب والمعلمين عند مداخل المدرسة ومداخل الصفوف، مما يلغي الحاجة إلى تسجيل الحضور اليدوي.",
    },
    en: {
      h3: "Smart Attendance Tracking",
      p: "Automatically detect student and teacher presence across classrooms and entrances, eliminating manual attendance tracking.",
    },
  },
  {
    ar: {
      h3: "رؤى حول أداء المعلمين",
      p: "متابعة نشاط الصفوف والتحقق من سير الحصص الدراسية وتوليد تقارير تساعد الإدارة على تقييم أداء المعلمين ومستوى الالتزام بالتعليمات.",
    },
    en: {
      h3: "Teacher Performance Insights",
      p: "Monitor classroom activity, verify lesson sessions, and generate reports that help administrators evaluate teaching performance and compliance.",
    },
  },
];
generalFeatures();

// services divs

let servicesDivsData = [
  {
    vid: "media/services/schools/vid_1.mp4",
    ar: {
      title: "مراقبة الحضور التلقائية",
      p1: "يقوم نظام رقيب بالكشف التلقائي عن الطلاب والمعلمين وتتبع حضورهم باستخدام كاميرات المراقبة الموجودة في المدرسة.",
      p2: "من خلال تحليل الفيديو بشكل لحظي في الممرات والمداخل، يسجل النظام الحضور دون الحاجة إلى النداء التقليدي، ويمنح الإدارة رؤية مباشرة لمعرفة من يوجد داخل الحرم المدرسي في أي وقت.",
      ulText: [
        "اكتشاف الطلاب والمعلمين عبر كاميرات الممرات",
        "تسجيل الحضور والانصراف تلقائياً",
        "متابعة حركة الأشخاص في الممرات والمداخل",
        "التمييز بين الطلاب والموظفين والزوار",
      ],
    },
    en: {
      title: "Automated Attendance Monitoring",
      p1: "Rgeeb automatically detects and tracks students and teachers using existing school security cameras.",
      p2: "By analyzing real-time video feeds in corridors and entrances, the system records presence and attendance without manual roll calls, giving administrators real-time visibility of who is on campus.",
      ulText: [
        "Detect students and teachers using corridor cameras",
        "Automatically record presence and attendance",
        "Track movement across hallways and entrances",
        "Distinguish between students, staff, and visitors",
      ],
    },
  },
  {
    vid: "media/services/schools/vid_2.mp4",
    ar: {
      title: "إشعارات استلام الطلاب الذكية وربطها بالصفوف",
      p1: "يكتشف رقيب وصول سيارة ولي الأمر إلى بوابة المدرسة باستخدام تقنية التعرف على لوحات المركبات.",
      p2: "يقوم النظام تلقائياً بتحديد الطالب المرتبط بالمركبة ويرسل إشعاراً فورياً إلى شاشة الصف، مما يسمح للمعلم بتجهيز الطالب للمغادرة بسرعة وأمان.",
      ulText: [
        "التعرف على سيارات أولياء الأمور عبر لوحات المركبات",
        "مطابقة السيارة مع ملف الطالب المسجل",
        "عرض إشعار الاستلام على شاشة الصف",
        "تقليل الازدحام ووقت الانتظار أثناء خروج الطلاب",
      ],
    },
    en: {
      title: "Automated Student Pickup and Classroom Notification",
      p1: "Rgeeb detects when a parent's vehicle arrives at the school gate using license plate recognition.",
      p2: "The system automatically identifies the associated student and instantly sends a pickup notification to the classroom screen, allowing teachers to prepare the student for safe and efficient dismissal.",
      ulText: [
        "Detect parent vehicles using license plate recognition",
        "Match the vehicle with the registered student profile",
        "Display student pickup notification on classroom screens",
        "Reduce congestion and waiting time during school dismissal",
      ],
    },
  },
  {
    vid: "media/services/schools/vid_3.mp4",
    ar: {
      title: "كشف السلوك العدواني أو غير الطبيعي لدى الطلاب",
      p1: "يقوم رقيب بتحليل نشاط الطلاب بشكل مستمر في ممرات المدرسة ومناطق الأنشطة باستخدام تقنيات الذكاء الاصطناعي.",
      p2: "يستطيع النظام اكتشاف المشاجرات أو السلوكيات المشبوهة أو الحالات غير الطبيعية، وإرسال تنبيهات فورية للمشرفين لمنع الحوادث والحفاظ على بيئة مدرسية آمنة.",
      ulText: [
        "اكتشاف المشاجرات أو السلوكيات العدوانية",
        "التعرف على التفاعلات المشبوهة أو حالات التنمر المحتملة",
        "رصد الطلاب الموجودين بمفردهم في مناطق غير معتادة أو محظورة",
        "إرسال تنبيهات فورية للمشرفين والأمن",
      ],
    },
    en: {
      title: "AI Detection of Aggressive or Abnormal Student Behavior",
      p1: "Rgeeb continuously analyzes student activity across school corridors and activity areas using AI-powered behavior detection.",
      p2: "The system identifies aggressive interactions, suspicious movements, or unusual situations and immediately alerts supervisors to help prevent incidents and maintain a safe school environment.",
      ulText: [
        "Detect student fights or aggressive physical behavior",
        "Identify suspicious interactions or potential bullying",
        "Monitor isolated students in unusual or restricted areas",
        "Send real-time alerts to supervisors and security staff",
      ],
    },
  },
  {
    vid: "media/services/schools/vid_4.mp4",
    ar: {
      title: "مراقبة المناطق الخطرة والمناطق الممنوعة",
      p1: "يراقب رقيب بيئة المدرسة لاكتشاف اقتراب الطلاب من المناطق الخطرة أو المحظورة مثل المسابح أو غرف الكهرباء أو مناطق الصيانة.",
      p2: "عند اكتشاف وجود غير آمن أو محاولة دخول غير مصرح بها، يرسل النظام تنبيهاً فورياً للمشرفين لمنع الحوادث المحتملة.",
      ulText: [
        "اكتشاف دخول الطلاب إلى مناطق خطرة مثل المسابح",
        "مراقبة التواجد قرب البنية التحتية الحساسة",
        "كشف محاولات الدخول غير المصرح بها إلى الغرف الحساسة",
        "إرسال تنبيهات فورية لإدارة المدرسة",
      ],
    },
    en: {
      title: "Danger Zone and Restricted Area Monitoring",
      p1: "Rgeeb monitors school environments to detect when students approach dangerous or restricted areas such as swimming pools, electrical rooms, or maintenance zones.",
      p2: "The system identifies unsafe presence or unauthorized access attempts and instantly alerts supervisors to prevent potential accidents.",
      ulText: [
        "Detect students entering dangerous areas like swimming pools",
        "Monitor presence near restricted infrastructure zones",
        "Identify unauthorized access attempts to sensitive rooms",
        "Send real-time alerts to supervisors and school staff",
      ],
    },
  },
  {
    vid: "media/services/schools/vid_5.mp4",
    ar: {
      title: "مراقبة أداء المعلمين والالتزام داخل الصفوف",
      p1: "يقوم رقيب بتحليل نشاط الصفوف للتحقق من دخول المعلمين إلى الحصص في الوقت المحدد ومتابعة سير الدروس.",
      p2: "باستخدام تحليل الفيديو بالذكاء الاصطناعي، يمكن للنظام اكتشاف نشاط التدريس، ومراقبة الحصص، وإنشاء تقارير تلقائية تساعد الإدارة على تقييم الأداء وضمان الالتزام التشغيلي.",
      ulText: [
        "اكتشاف وجود المعلم داخل الصف تلقائياً",
        "التحقق من بدء الحصص وفق الجدول الدراسي",
        "تحليل نشاط التدريس مثل الشرح أو الكتابة على السبورة",
        "إنشاء تقارير تلقائية لتقييم الأداء والالتزام",
      ],
    },
    en: {
      title: "Teacher Performance and Classroom Compliance Monitoring",
      p1: "Rgeeb analyzes classroom activity to verify that teachers enter their classes on time and actively conduct lessons.",
      p2: "Using AI-powered video analytics, the system detects teaching activity, monitors classroom sessions, and generates automated reports that help school administrators evaluate teacher performance and operational compliance.",
      ulText: [
        "Detect teacher presence in classrooms automatically",
        "Verify teachers start classes according to schedule",
        "Analyze teaching activity such as writing or explaining lessons",
        "Generate automated reports for teacher performance and compliance",
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
