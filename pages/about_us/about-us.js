htmlFun();
header();
theLangBtn("../../gb.svg", "../../sa.svg");
footerText();

// main sec

let mainSecH1 = document.querySelector(".main-sec .content h1");
let mainSecP1 = document.querySelector(".main-sec .content p:first-of-type");
let mainSecP2 = document.querySelector(".main-sec .content p:last-of-type");
let mainSecData = {
  ar: {
    h1: "نبذة عن منصة رقيب للمراقبة بالذكاء الاصطناعي",
    p1: "يوفّر نظام المراقبة المتقدم من رقيب، والمدعوم بالذكاء الاصطناعي، حلولاً أمنية متكاملة لحماية المنشآت والأصول. ومن خلال تقنيات التعلم العميق والرؤية الحاسوبية، يقوم النظام بتحليل الفيديو بشكل لحظي لاكتشاف الأنماط غير الطبيعية ورصد الحالات المشبوهة بدقة عالية، مما يساعد على تعزيز المراقبة الاستباقية وتقليل الإنذارات الخاطئة، ويمنحك مستوى أعلى من الاطمئنان.",
    p2: "ولا يقتصر دور المنصة على المراقبة اللحظية فقط، بل يمتد إلى تحليل البيانات السابقة وإصدار تقارير تفصيلية تساعدك على اتخاذ قرارات أدق ورفع الكفاءة التشغيلية. سواء كنت تسعى إلى تأمين منزلك، أو إدارة حركة المرور، أو مراقبة المخزون في المستودعات، توفّر لك رقيب المرونة والقدرة التي تحتاجها للتكيف مع احتياجاتك المتغيرة، لتكون شريكك المثالي في بناء بيئة أكثر أماناً وذكاءً.",
  },
  en: {
    h1: "About Rgeeb AI Monitoring Platform",
    p1: "Our advanced AI-powered surveillance system provides comprehensive security solutions for your facilities and assets. Leveraging cutting-edge deep learning and computer vision technologies, the system analyzes video footage in real-time to identify suspicious patterns and detect anomalies with unmatched precision. This ensures proactive threat monitoring and a drastic reduction in false alarms, granting you complete peace of mind.",
    p2: "Beyond real-time monitoring, our solution extends to analyzing historical data and generating detailed reports that empower you to make informed decisions and enhance operational efficiency. Whether you aim to secure your home, manage city traffic, or oversee warehouse inventory, our system delivers the flexibility and power required to adapt to your evolving needs, making it your ideal partner for a safer, smarter environment.”",
  },
};
mainSec();
