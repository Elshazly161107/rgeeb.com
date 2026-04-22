// INIT

let htmlPage = document.querySelector("html");

let langBtn = document.getElementById("lang-btn");
let langBtnSpan = document.querySelector("#lang-btn span");
let langBtnImg = document.querySelector("#lang-btn img");

if (!sessionStorage.getItem("currentLang")) {
  sessionStorage.setItem("currentLang", "ar");
  sessionStorage.setItem("currentDir", "rtl");
}

// theme

let body = document.body;
let modeBtn = document.getElementById("theme-btn");
let icon = modeBtn.querySelector("i");

function updateIcon(isLight) {
  if (isLight) {
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = sessionStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.add("light");
    updateIcon(true);
  }
});

modeBtn.addEventListener("click", function () {
  setTimeout(() => {
    body.classList.toggle("light");

    const isLight = body.classList.contains("light");

    if (isLight) {
      sessionStorage.setItem("theme", "light");
    } else {
      sessionStorage.setItem("theme", "dark");
    }

    updateIcon(isLight);
  }, 150);
});

// index main menu

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("header .menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-xmark");
});

// HELPERS

function getLang() {
  return sessionStorage.getItem("currentLang");
}

// DATA

// -- header

let headerMenuAText = document.querySelectorAll("header .menu a");
let headerData = {
  ar: ["الرئيسية", "الخدمات", "من نحن؟", "تواصل معنا"],
  en: ["home", "services", "about us", "contact us"],
  href: [
    "index.html",
    "pages/services/services.html",
    "pages/about_us/about-us.html",
    "pages/contact_us/contact-us.html",
  ],
};

// -- footer

const supabaseUrl = "https://gppccwbatoejlvuvpuvl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcGNjd2JhdG9lamx2dXZwdXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NzA0NDAsImV4cCI6MjA5MjM0NjQ0MH0.PhSja0pEkoKhHDVkO8VTJGbuc0vw2gGDcPKFY_DmBis";
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

let isEmailInNewsletterFound = false;

let footerForm = document.querySelector("footer form");
let footerFormSentBtn = document.querySelector("footer form button");
let footerFormInput = document.querySelector("footer form input[type='email']");
let footerFormerrorMsg = document.querySelector("footer form .error-msg");
let footerFormeEmailFoundMsg = document.querySelector(
  "footer form .email-found-msg",
);
let theIcon = document.querySelector("footer .send-msg form button i");

let footerData = {
  ar: {
    //
    socialMediaPText:
      "يوفر نظام المراقبة المتقدم لدينا، المدعوم بالذكاء الاصطناعي، حلولاً أمنية متكاملة لحماية منشآتك وأصولك.",
    //
    sendMsgH1Text: "النشرة البريدية",
    sendMsgPText:
      "اشترك في نشرتنا البريدية ليصلك كل جديد عن آخر التحديثات والأخبار !",
    errorMsgPText: "الرجاء التأكد من صحة البريد المدخل",
    mailFoundMsgText: "البريد مسجل بالفعل",
    //
    contactH1Text: "معلومات التواصل",
    contactTitlesText: ["البريد الالكتروني", "رقم الهاتف", "العنوان"],
    contactAddressText:
      "مبنى 3403، شارع أنس بن مالك حي الصحافة، الرياض 13321 المملكة العربية السعودية",
    //
    rights: "جميع الحقوق محفوظة لمنصة رقيب 2026 &copy;",
  },
  en: {
    //
    socialMediaPText:
      "Our advanced AI-powered surveillance system provides comprehensive security solutions for your facilities and assets.",
    //
    sendMsgH1Text: "newsletter",
    sendMsgPText:
      "Subscribe to our newsletter to receive updates on the latest news!",
    errorMsgPText: "Please verify the entered email",
    mailFoundMsgText: "email already signed",
    //
    contactH1Text: "contact",
    contactTitlesText: ["email", "phone number", "address"],
    contactAddressText:
      "Building 3403, Anas Ibn Malik St. Al Sahafah District, Riyadh 13321 Saudi Arabia",
    //
    rights: "All rights reserved by rgeeb 2026 &copy;",
  },
};

emailjs.init("xrChcTWgEzmWSc972");

footerForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const emailValue = footerFormInput.value.trim(); // أضفنا trim لمنع المسافات الفارغة

  // 1. فحص الفراغ
  if (emailValue === "") {
    showError();
    return;
  }

  // 2. تشغيل التحميل "فوراً" قبل أي اتصال بالقاعدة (UX)
  startLoadingState();

  // 3. محاولة الإرسال للقاعدة
  const { data, error } = await _supabase
    .from("Newsletters") // تأكد أن الاسم يبدأ بحرف كبير N مثل ما كتبت
    .insert([{ email: emailValue }]);

  if (error) {
    // إذا كان الإيميل موجوداً (خطأ تكرار)
    foundingMsg(); // استدعاء دالة "الإيميل موجود" اللي أنت تعبت فيها
    return;
  }

  // 4. إذا نجح الحفظ في القاعدة.. نرسل الإيميل
  const templateParams = { email: emailValue };

  emailjs.send("service_mdaa6dw", "template_iwcrh4z", templateParams).then(
    function (response) {
      handleSuccess(emailValue);
    },
    function (error) {
      handleError();
    },
  );
});

function startLoadingState() {
  footerFormSentBtn.disabled = true;
  footerForm.classList.add("unclick");
  theIcon.classList.replace("fa-paper-plane", "fa-spinner");
  theIcon.classList.add("spin");
}

function handleSuccess(emailValue) {
  // 1. إرجاع الأيقونة لشكلها الطبيعي (الطائرة) وإيقاف الدوران
  theIcon.classList.replace("fa-spinner", "fa-paper-plane");
  theIcon.classList.remove("spin");

  // 2. إظهار علامة الصح (حالة النجاح)
  footerForm.classList.add("sent");
  footerForm.classList.remove("unclick");

  // 3. إعادة تعيين الفورم (مسح الإيميل المكتوب)
  footerForm.reset();

  // 4. أهم جزء: مؤقت زمني لإعادة الزر للعمل (UX)
  setTimeout(() => {
    footerForm.classList.remove("sent"); // إخفاء العلامة الخضراء
    footerFormSentBtn.disabled = false; // تفعيل الزر مرة أخرى
  }, 2000); // 3000 تعني 3 ثوانٍ، تقدر تخليها 2000 إذا تحب أسرع
}

function showError() {
  footerForm.classList.add("error");
  footerForm.classList.add("error");
  setTimeout(() => {
    footerForm.classList.remove("error");
    footerForm.classList.remove("error");
  }, 2000);
}

function handleError() {
  theIcon.classList.remove("fa-spinner");
  theIcon.classList.add("fa-paper-plane");
  theIcon.classList.remove("spin");
  footerForm.classList.add("error");
  footerFormerrorMsg.classList.add("active");
  footerForm.classList.remove("unclick");

  setTimeout(() => {
    footerForm.classList.remove("error");
    footerFormerrorMsg.classList.remove("active");
    footerFormSentBtn.disabled = false;
  }, 2000);
}

function foundingMsg() {
  theIcon.classList.remove("fa-spinner");
  theIcon.classList.add("fa-paper-plane");
  theIcon.classList.remove("spin");
  footerForm.classList.add("error");
  footerFormeEmailFoundMsg.classList.add("active");
  footerForm.classList.remove("unclick");

  setTimeout(() => {
    footerForm.classList.remove("error");
    footerFormeEmailFoundMsg.classList.remove("active");
    footerFormSentBtn.disabled = false;
  }, 2000);
}

//
let socialMediaP = document.querySelector("footer .social-media p");
//
let sendMsgH1 = document.querySelector("footer .send-msg h1");
let sendMsgP = document.querySelector("footer .send-msg p");
let errorMsgP = document.querySelector("footer .send-msg .error-msg p");
let EmailFoundMsgP = document.querySelector(
  "footer .send-msg .email-found-msg p",
);
//
let contactH1 = document.querySelector("footer .contact h1");
let contactAddress = document.querySelector("footer .contact p");
//
let rightsP = document.querySelector("footer .rights p");

// Functions

function htmlFun() {
  let lang = getLang();
  let dir = sessionStorage.getItem("currentDir");
  htmlPage.setAttribute("lang", lang);
  htmlPage.setAttribute("dir", dir);
}

function theLangBtn(src1, src2) {
  langBtnSpan.textContent = getLang() === "ar" ? "english" : "العربية";
  if (getLang() === "ar") {
    langBtnImg.setAttribute("src", src1);
  } else {
    langBtnImg.setAttribute("src", src2);
  }
}

function header(src) {
  for (let i = 0; i < headerMenuAText.length; i++) {
    headerMenuAText[i].textContent = headerData[getLang()][i];
    headerMenuAText[i].setAttribute("href", src + headerData.href[i]);
    let htmlID;
    if (htmlPage.id === "ABOUT-US" || htmlPage.id === "CONTACT-US") {
      htmlID = htmlPage.id.split("-").join(" ");
    } else {
      htmlID = htmlPage.id;
    }
    if (headerData.en[i].toUpperCase() === htmlID.toUpperCase()) {
      headerMenuAText[i].classList.add("active");
    } else {
      headerMenuAText[i].classList.remove("active");
    }
  }
}

function footerText() {
  //
  socialMediaP.textContent = footerData[getLang()].socialMediaPText;
  //
  sendMsgH1.textContent = footerData[getLang()].sendMsgH1Text;
  sendMsgP.textContent = footerData[getLang()].sendMsgPText;
  errorMsgP.textContent = footerData[getLang()].errorMsgPText;
  EmailFoundMsgP.textContent = footerData[getLang()].mailFoundMsgText;
  //
  contactH1.textContent = footerData[getLang()].contactH1Text;
  for (let i = 0; i < footerData[getLang()].contactTitlesText.length; i++) {
    document.querySelector(
      `footer .contact div:nth-of-type(${i + 1}) h3`,
    ).textContent = footerData[getLang()].contactTitlesText[i];
  }
  contactAddress.textContent = footerData[getLang()].contactAddressText;
  //
  rightsP.innerHTML = footerData[getLang()].rights;
}

// TO TOP BTN

let toTopBtn = document.getElementById("to-top-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
}

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
