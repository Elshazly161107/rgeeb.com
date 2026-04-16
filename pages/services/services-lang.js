// APPLY ALL

function applyLanguage() {
  // functions from init.js
  htmlFun();
  theLangBtn("../../gb.svg", "../../sa.svg");
  header("../../");
  footerText();
  // functions from local file
  bigHeroText();
  fqa();
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

// Function

function bigHeroText() {
  if (getLang() === "ar") {
    bigHero.textContent = "الخدمات";
    bigHero.style.fontFamily = `"Beiruti", sans-serif`;
  } else {
    bigHero.textContent = "services";
    bigHero.style.fontFamily = `"Instrument Serif", serif`;
  }
}

function fqa() {
  if (getLang() === "ar") {
    fqaTitle.textContent = "الأسئلة الشائعة";
  } else {
    fqaTitle.textContent = "fqa";
  }
  fqaQuestionsContainer.innerHTML = "";
  for (let i = 0; i < fqaQuestionsData.length; i++) {
    let q = document.createElement("div");
    q.classList.add("q");
    if (fqaQuestionsData[i].openingStatus === "open") {
      q.classList.add(fqaQuestionsData[i].openingStatus);
    }
    q.innerHTML = `
    <button>
    <p>${fqaQuestionsData[i][getLang()].q}</p>
    <i class="fa-solid fa-${fqaQuestionsData[i].btnIcon}"></i>
    </button>
    <div class="ans">
    <p>${fqaQuestionsData[i][getLang()].ans}</p>
    </div>`;
    fqaQuestionsContainer.appendChild(q);
  }
  let fqaQuestionsBtn = document.querySelectorAll(".fqa .questions .q");
  fqaQuestionsBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let isOpen = btn.classList.contains("open");

      fqaQuestionsBtn.forEach((otherBtn) => {
        otherBtn.classList.remove("open");
        updateIcon(otherBtn);
      });

      if (!isOpen) {
        btn.classList.add("open");
      }

      updateIcon(btn);
    });
  });
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
