// INIT

let langBtn = document.getElementById("lang-btn");

if (!sessionStorage.getItem("currentLang")) {
  sessionStorage.setItem("currentLang", "ar");
  sessionStorage.setItem("currentDir", "rtl");
}

// HELPERS

function getLang() {
  return sessionStorage.getItem("currentLang");
}
