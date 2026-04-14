let langBtn = document.getElementById("lang-btn");

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";

  // html

  let allElements = document.querySelectorAll("html body *");

  if (currentLang === "ar") {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
  } else {
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", "en");
  }

  // the btn style

  langBtnSpan.textContent = currentLang === "ar" ? "english" : "العربية";
  if (currentLang === "ar") {
    langBtnImg.setAttribute("src", "gb.svg");
  } else {
    langBtnImg.setAttribute("src", "sa.svg");
  }

  // header

  for (let i = 0; i < headerMenuAText.length; i++) {
    headerMenuAText[i].textContent = headerData[currentLang][i];
    headerMenuAText[i].setAttribute("href", headerData.href[i]);
  }

  // face page

  slidesText.textContent = facePageTextData[slidesIndex][currentLang];

  //

  if (currentLang === "ar") {
    homeAboutUsTitle.textContent = "من نحن ؟";
    homeAboutUsH2.innerHTML = `حلول وخدمات متقدمة ترتقي بمستوى الأمن <span>والحماية</span>`;
  } else {
    homeAboutUsTitle.textContent = "about us";
    homeAboutUsH2.innerHTML = `Advanced solutions and services elevating security <span>and protection</span>`;
  }

  //

  if (currentLang === "ar") {
    homeServicesTitle.textContent = "خدمات نقدمها";
    homeServicesH2.innerHTML = `خدمات أمنية متميزة تعتمد على <span>الذكاء الاصطناعي</span>`;
  } else {
    homeServicesTitle.textContent = "services we present";
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
        <h3>${homeServicesData[i][currentLang].h3}</h3>
        <p>${homeServicesData[i][currentLang].p}</p>
    </div>`;
    homeServicesContainer.appendChild(service);
  }

  //

  if (currentLang === "ar") {
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
        <h3>${weProvidesData[i][currentLang].h3}</h3>
        <p>${weProvidesData[i][currentLang].p}</p>
    </div>`;
    weProvidesContainer.appendChild(card);
  }

  //

  if (currentLang === "ar") {
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
    <p>${homeFqaQuestionsData[i][currentLang].q}</p>
    <i class="fa-solid fa-${homeFqaQuestionsData[i].btnIcon}"></i>
    </button>
    <div class="ans">
    <p>${homeFqaQuestionsData[i][currentLang].ans}</p>
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

  // footer

  footerText();
});
