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
  processSteps();
  ourServices();
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

function processSteps() {
  if (getLang() === "ar") {
    processTitle.textContent = "خطوات العمل";
    processH2.textContent = "خطوات العمل بكل بساطة";
  } else {
    processTitle.textContent = "Process";
    processH2.textContent = "easy process steps";
  }
  processContainer.innerHTML = "";
  for (let i = 0; i < processData.length; i++) {
    console.log(processData[i][getLang()].title);
    let step = document.createElement("div");
    step.classList.add("step");
    step.innerHTML = `
    <div class="icon">
        <i class="${processData[i].icon}"></i>
        <div class="box-num">
          <span>0${i + 1}</span>
        </div>
    </div>
    <h3>${processData[i][getLang()].title}</h3>
    <p>${processData[i][getLang()].p}</p>`;
    processContainer.appendChild(step);
  }
}

function ourServices() {
  if (getLang() === "ar") {
    ourServicesTitle.textContent = "خدماتنا";
    ourServicesH2.textContent = "حلولنا الذكية لمختلف القطاعات";
  } else {
    ourServicesTitle.textContent = "our services";
    ourServicesH2.textContent = "Check our awesome services";
  }
  ourServicesContainer.innerHTML = "";
  for (let i = 0; i < ourServicesData.length; i++) {
    let service = document.createElement("div");
    service.classList.add("service");
    service.innerHTML = `
    <div class="img">
      <img src="../../${ourServicesData[i].img}" alt>
    </div>
    <div class="icon">
        <i class="${ourServicesData[i].icon}"></i>
    </div>
    <div class="content">
      <h3>${ourServicesData[i][getLang()].title}</h3>
      <p>${ourServicesData[i][getLang()].p}</p>
      <h4>
          <a href="${ourServicesData[i].href}">${ourServicesData[i][getLang()].a}</a>
      </h4>
    </div>`;
    ourServicesContainer.appendChild(service);
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
