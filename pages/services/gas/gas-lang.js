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
    bigHero.textContent = "محطات الوقود";
    bigHero.style.fontFamily = `"Beiruti", sans-serif`;
  } else {
    bigHero.textContent = "gas stations";
    bigHero.style.fontFamily = `"Instrument Serif", serif`;
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
      "مزايا الذكاء الاصطناعي<br>كيف تعزز المراقبة بالذكاء الاصطناعي كفاءة تشغيل محطات الوقود";
    generalFeaturesP.textContent =
      "تحلّل رقيب بث الكاميرات بشكل لحظي لمتابعة أداء الموظفين، وتعزيز الالتزام بإجراءات السلامة، واكتشاف المخاطر التشغيلية في مختلف أنحاء المحطة.";
  } else {
    generalFeaturesh2.textContent =
      "AI FEATURES <br> How AI Monitoring Improves Gas Station Operations";
    generalFeaturesP.textContent =
      "Rgeeb analyzes real-time camera feeds to monitor employee activity, enforce safety procedures, and detect operational risks across the station.";
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
      `body .gas-service:nth-of-type(${i + 4})`,
    );
    let serviceUl = "";
    for (let o = 0; o < servicesDivsData[i][getLang()].ulText.length; o++) {
      serviceUl += `<li>${servicesDivsData[i][getLang()].ulText[o]}</li>`;
    }
    let theVid = document.querySelector(
      `body .gas-service:nth-of-type(${i + 4}) video`,
    );
    theVid.setAttribute("src", `../../../${servicesDivsData[i].vid}`);
    let h2 = document.querySelector(
      `body .gas-service:nth-of-type(${i + 4}) .content h2`,
    );
    h2.textContent = servicesDivsData[i][getLang()].title;
    let p1 = document.querySelector(
      `body .gas-service:nth-of-type(${i + 4}) .content p:first-of-type`,
    );
    p1.textContent = servicesDivsData[i][getLang()].p1;
    let p2 = document.querySelector(
      `body .gas-service:nth-of-type(${i + 4}) .content p:last-of-type`,
    );
    p2.textContent = servicesDivsData[i][getLang()].p2;
    let ul = document.querySelector(
      `body .gas-service:nth-of-type(${i + 4}) .content ul`,
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
