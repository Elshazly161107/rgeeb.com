// APPLY ALL

function applyLanguage() {
  // functions from init.js
  htmlFun();
  theLangBtn("../../gb.svg", "../../sa.svg");
  header("../../");
  footerText();
  // functions from local file
  contactTypes();
  fillFormText();
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

function fillFormText() {
  if (getLang() === "ar") {
    fillFormH1.textContent =
      "يمكنك أيضاً إرسال بعض المعلومات وسنقوم بالتواصل معك";
  } else {
    fillFormH1.textContent =
      "you can also send some info. about you and we'll cotact with you";
  }

  for (let i = 0; i < fillFormMsgs.length; i++) {
    fillFormMsgs[i].textContent = fillFormData[getLang()].msgs[i];
  }

  for (let i = 0; i < fillFormLables.length; i++) {
    fillFormLables[i].textContent = fillFormData[getLang()].lables[i];
    fillFormInputsPlaceholders[i].setAttribute(
      "placeholder",
      fillFormData[getLang()].placeholders[i],
    );
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
