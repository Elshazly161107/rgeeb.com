// APPLY ALL

function applyLanguage() {
  // functions from init.js
  htmlFun();
  theLangBtn("../../gb.svg", "../../sa.svg");
  header("../../");
  footerText();
  // functions from local file
  mainSec();
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

// Function

function mainSec() {
  mainSecH1.textContent = mainSecData[getLang()].h1;
  mainSecP1.textContent = mainSecData[getLang()].p1;
  mainSecP2.textContent = mainSecData[getLang()].p2;
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
