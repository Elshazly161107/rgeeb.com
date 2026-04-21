// APPLY ALL

function applyLanguage() {
  // functions from init.js
  htmlFun();
  theLangBtn("../../gb.svg", "../../sa.svg");
  header("../../");
  footerText();
  // functions from local file
  contactTypes();
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

function contactTypes() {
  contactTypesAddress.textContent = contactTypesData[getLang()].address;
  for (let i = 0; i < contactTypesTitles.length; i++) {
    contactTypesTitles[i].textContent = contactTypesData[getLang()].titles[i];
  }
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
