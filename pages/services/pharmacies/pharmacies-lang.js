// APPLY ALL

function applyLanguage() {
  // functions from init.js
  htmlFun();
  theLangBtn("../../../gb.svg", "../../../sa.svg");
  header("../../../");
  footerText();
  // functions from local file
  bigHeroText();
  mainSec();
  generalFeatures();
  servicesDiv();
  callUsText();
}

// TOGGLE LANG

function toggleLang() {
  let currentLang = getLang();

  if (currentLang === "ar") {
    sessionStorage.setItem("currentLang", "en");
    sessionStorage.setItem("currentDir", "ltr");
  } else {
    sessionStorage.setItem("currentLang", "ar");
    sessionStorage.setItem("currentDir", "rtl");
  }
}

// Functions

function bigHeroText() {
  if (getLang() === "ar") {
    bigHero.textContent = "الصيدليات";
    bigHero.style.fontFamily = `"Beiruti", sans-serif`;
  } else {
    bigHero.textContent = "pharmacies";
    bigHero.style.fontFamily = `"Oswald", sans-serif`;
  }
}

function mainSec() {
  mainSecH2.textContent = mainSecData[getLang()].h2;
  mainSecP.textContent = mainSecData[getLang()].p;
  let ulTexting = "";
  mainSecUl.innerHTML = "";
  for (let i = 0; i < mainSecData[getLang()].ulText.length; i++) {
    ulTexting += `<li>${mainSecData[getLang()].ulText[i]}</li>`;
  }
  mainSecUl.innerHTML = ulTexting;
}

function generalFeatures() {
  if (getLang() === "ar") {
    generalFeaturesh2.innerHTML =
      "مزايا الذكاء الاصطناعي<br>كيف تعزز المراقبة بالذكاء الاصطناعي كفاءة تشغيل الصيدليات";
    generalFeaturesP.textContent =
      "يقوم رقيب بتحليل بث الكاميرات داخل الصيدلية بشكل لحظي لمتابعة حركة الخدمة، ومناطق المخزون، وعمليات الدفع عند الصندوق. يستطيع النظام اكتشاف الأحداث التشغيلية وتوفير تنبيهات تساعد مديري الصيدليات على الحفاظ على توفر المنتجات، وضمان شفافية العمليات، وتقديم خدمة عملاء أكثر كفاءة.";
  } else {
    generalFeaturesh2.innerHTML =
      "AI FEATURES <br> How AI Monitoring Improves Pharmacies Operations";
    generalFeaturesP.textContent =
      "Rgeeb analyzes real-time camera feeds inside pharmacies to monitor service flow, inventory areas, and checkout operations. The platform detects operational events and provides alerts that help pharmacy managers maintain product availability, transaction transparency, and efficient customer service.";
  }
  generalFeaturesContainer.innerHTML = "";
  for (let i = 0; i < generalFeaturesData.length; i++) {
    let feature = document.createElement("div");
    feature.innerHTML = `
        <h3>${generalFeaturesData[i][getLang()].h3}</h3>
        <p>${generalFeaturesData[i][getLang()].p}</p>`;
    generalFeaturesContainer.appendChild(feature);
  }
}

function servicesDiv() {
  for (let i = 0; i < servicesDivsData.length; i++) {
    let serviceDiv = document.querySelector(
      `body .main-service:nth-of-type(${i + 4})`,
    );
    let serviceUl = "";
    for (let o = 0; o < servicesDivsData[i][getLang()].ulText.length; o++) {
      serviceUl += `<li>${servicesDivsData[i][getLang()].ulText[o]}</li>`;
    }
    let theVid = document.querySelector(
      `body .main-service:nth-of-type(${i + 4}) video`,
    );
    theVid.setAttribute("src", `../../../${servicesDivsData[i].vid}`);
    let h2 = document.querySelector(
      `body .main-service:nth-of-type(${i + 4}) .content h2`,
    );
    h2.textContent = servicesDivsData[i][getLang()].title;
    let p1 = document.querySelector(
      `body .main-service:nth-of-type(${i + 4}) .content p:first-of-type`,
    );
    p1.textContent = servicesDivsData[i][getLang()].p1;
    let p2 = document.querySelector(
      `body .main-service:nth-of-type(${i + 4}) .content p:last-of-type`,
    );
    p2.textContent = servicesDivsData[i][getLang()].p2;
    let ul = document.querySelector(
      `body .main-service:nth-of-type(${i + 4}) .content ul`,
    );
    ul.innerHTML = serviceUl;
  }
}

function callUsText() {
  callUsTitle.textContent = callUsData[getLang()].title;
  callUsP.textContent = callUsData[getLang()].p;
}

// EVENTS

langBtn.addEventListener("click", function () {
  toggleLang();
  applyLanguage();
});

document.addEventListener("DOMContentLoaded", function () {
  applyLanguage();
  langBtn.click();
  langBtn.click();
});
