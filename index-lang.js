// APPLY ALL

function applyLanguage() {
  htmlFun();
  theLangBtn();
  header();
  facePage();
  homeAboutUs();
  homeServices();
  weProvides();
  homeFqa();
  clintsComments();
  footerText();
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

// Functions

function htmlFun() {
  let lang = getLang();
  let dir = sessionStorage.getItem("currentDir");
  htmlPage.setAttribute("lang", lang);
  htmlPage.setAttribute("dir", dir);
}

function theLangBtn() {
  langBtnSpan.textContent = getLang() === "ar" ? "english" : "العربية";
  if (getLang() === "ar") {
    langBtnImg.setAttribute("src", "gb.svg");
  } else {
    langBtnImg.setAttribute("src", "sa.svg");
  }
}

function header() {
  for (let i = 0; i < headerMenuAText.length; i++) {
    headerMenuAText[i].textContent = headerData[getLang()][i];
    headerMenuAText[i].setAttribute("href", headerData.href[i]);
  }
}

function facePage() {
  slidesText.textContent = facePageTextData[slidesIndex][getLang()];
}

function homeAboutUs() {
  if (getLang() === "ar") {
    homeAboutUsTitle.textContent = "من نحن؟";
    homeAboutUsH2.innerHTML = `حلول وخدمات متقدمة ترتقي بمستوى الأمن <span>والحماية</span>`;
  } else {
    homeAboutUsTitle.textContent = "about us";
    homeAboutUsH2.innerHTML = `Advanced solutions and services elevating security <span>and protection</span>`;
  }
}

function homeServices() {
  if (getLang() === "ar") {
    homeServicesTitle.textContent = "خدمات نقدمها";
    homeServicesH2.innerHTML = `خدمات أمنية متميزة تعتمد على <span>الذكاء الاصطناعي</span>`;
  } else {
    homeServicesTitle.textContent = "Our services";
    homeServicesH2.innerHTML = `Awesome AI <span>security services</span>`;
  }
  homeServicesContainer.innerHTML = "";
  for (let i = 0; i < homeServicesData.length; i++) {
    let service = document.createElement("div");
    service.classList.add("service");
    service.innerHTML = `
    <div class="bg-img"></div>
    <div class="shadow"></div>
    <div class="content">
        <h3>${homeServicesData[i][getLang()].h3}</h3>
        <p>${homeServicesData[i][getLang()].p}</p>
    </div>`;
    homeServicesContainer.appendChild(service);
  }
}

function weProvides() {
  if (getLang() === "ar") {
    weProvidesTitle.textContent = "نقدم لكم";
    weProvidesH2.innerHTML = `<span>الجيل الجديد</span> من حلول المراقبة الذكية بالذكاء الاصطناعي`;
  } else {
    weProvidesTitle.textContent = "we provides";
    weProvidesH2.innerHTML = `<span>Next-Gen</span> AI Surveillance Solutions.`;
  }
  weProvidesContainer.innerHTML = "";
  for (let i = 0; i < weProvidesData.length; i++) {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="icon">
        <i class="fa-solid fa-circle-check"></i>
    </div>
    <div class="describe">
        <h3>${weProvidesData[i][getLang()].h3}</h3>
        <p>${weProvidesData[i][getLang()].p}</p>
    </div>`;
    weProvidesContainer.appendChild(card);
  }
}

function homeFqa() {
  if (getLang() === "ar") {
    homeFqaTitle.textContent = "الأسئلة الشائعة";
  } else {
    homeFqaTitle.textContent = "fqa";
  }
  homeFqaQuestionsContainer.innerHTML = "";
  for (let i = 0; i < homeFqaQuestionsData.length; i++) {
    let q = document.createElement("div");
    q.classList.add("q");
    if (homeFqaQuestionsData[i].openingStatus === "open") {
      q.classList.add(homeFqaQuestionsData[i].openingStatus);
    }
    q.innerHTML = `
    <button>
    <p>${homeFqaQuestionsData[i][getLang()].q}</p>
    <i class="fa-solid fa-${homeFqaQuestionsData[i].btnIcon}"></i>
    </button>
    <div class="ans">
    <p>${homeFqaQuestionsData[i][getLang()].ans}</p>
    </div>`;
    homeFqaQuestionsContainer.appendChild(q);
  }
  homeFqaQuestionsBtn = document.querySelectorAll(".home-fqa .questions .q");
  homeFqaQuestionsBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let isOpen = btn.classList.contains("open");

      homeFqaQuestionsBtn.forEach((otherBtn) => {
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

function clintsComments() {
  if (getLang() === "ar") {
    clintsCommentsTitle.textContent = "ما يقول العملاء عن رقيب؟";
  } else {
    clintsCommentsTitle.textContent = "what clients say about rgeeb?";
  }
  clintsCommentsContainer.innerHTML = "";
  for (let i = 0; i < clintsCommentsData.length; i++) {
    let comment = document.createElement("div");
    comment.classList.add("comment");
    let starsDiv = "";
    for (let o = 0; o < clintsCommentsData[i].stars; o++) {
      let star = `<i class="fa-solid fa-star"></i>`;
      starsDiv += star;
    }
    comment.innerHTML = `
    <div class="img">
      <img src="${clintsCommentsData[i].img}" alt>
    </div>
    <h2>${clintsCommentsData[i][getLang()].name}</h2>
    <h3>${clintsCommentsData[i][getLang()].job}</h3>
    <div class="stars">
        ${starsDiv}
    </div>
    <p>${clintsCommentsData[i][getLang()].text}</p>`;
    clintsCommentsContainer.appendChild(comment);
  }
}

function footerText() {
  //
  socialMediaP.textContent = footerData[getLang()].socialMediaPText;
  //
  sendMsgH1.textContent = footerData[getLang()].sendMsgH1Text;
  sendMsgP.textContent = footerData[getLang()].sendMsgPText;
  errorMsgP.textContent = footerData[getLang()].errorMsgPText;
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
