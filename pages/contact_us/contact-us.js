htmlFun();
header();
theLangBtn("../../gb.svg", "../../sa.svg");
footerText();

// contact types

let contactTypesTitles = document.querySelectorAll(
  ".contact-types .container>div h3",
);
let contactTypesAddress = document.querySelector(
  ".contact-types .container>div:nth-of-type(3) a",
);
let contactTypesData = {
  ar: {
    titles: ["البريد الإلكتروني", "رقم الهاتف", "العنوان"],
    address:
      "مبنى 3403، شارع أنس بن مالك حي الصحافة، الرياض 13321 المملكة العربية السعودية",
  },
  en: {
    titles: ["email", "phone number", "address"],
    address:
      "Building 3403, Anas Ibn Malik St. Al Sahafah District, Riyadh 13321 Saudi Arabia",
  },
};

contactTypes();

//
let fillFormData = {
  ar: {
    lables: ["الاسم", "البريد الاكتروني", "نوع النشاط التجاري", "رسالتك"],
    placeholders: [
      "ادخل اسمك",
      "ادخل بريدك الالكتروني",
      "مثال: مطعم، مقهى، محل...",
      "أكثر من 50 حرف",
    ],
    msgs: [
      "الرجاء التأكد من صحة البيانات المدخلة",
      "البريد مسجل بالفعل",
      "تم إرسال البانات بنجاح .. سنتواصل معك في أقرب وقت",
    ],
  },
  en: {
    lables: ["your name", "email", "your business type", "message"],
    placeholders: [
      "enter your name",
      "enter your email",
      "ex: restaurant, cafe, store...",
      "more than 50 letters",
    ],
    msgs: [
      "Please verify the entered data",
      "email already signed",
      "sent done !",
    ],
  },
};

let fillFormH1 = document.querySelector(".fill-form h1");
let fillFormLables = document.querySelectorAll(".fill-form form label");
let fillFormInputsPlaceholders = document.querySelectorAll(
  ".fill-form form :is(input, textarea)",
);
let fillFormMsgs = document.querySelectorAll(".fill-form .msg p");

fillFormText();

//

let fillFormDiv = document.querySelector(".fill-form");
let fillFormErrorDiv = document.querySelector(
  ".fill-form .fill-form-error-msg",
);
let fillFormSentDiv = document.querySelector(".fill-form .fill-form-sent-msg");
let fillFormFoundDiv = document.querySelector(
  ".fill-form .fill-form-found-msg",
);
let loadingDiv = document.querySelector(".fill-form form button div");

//

// استيراد Supabase (تأكد أنك أضفت رابط الـ CDN في الـ HTML)
const supabaseUrl2 = "https://pzkqaktfjclzwbzwhxjq.supabase.co";
const supabaseKey2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6a3Fha3RmamNsendiendoeGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NzQ4NjUsImV4cCI6MjA5MjM1MDg2NX0.mzjh5wvpbBFKsCX9b7VtRCvo3mo0LMiSe5i6aey1_sw";
const _supabase2 = supabase.createClient(supabaseUrl2, supabaseKey2);

// تحديد العناصر من الـ HTML
const contactForm = document.querySelector(".fill-form form");

let isValidData = false;
let validation = 0;

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // منع الصفحة من التحديث

  fillFormDiv.classList.add("unclick");

  isValidData = false;
  validation = 0;

  // جمع البيانات من الحقول بناءً على الـ IDs اللي في كودك
  const formData = {
    the_name: document.getElementById("the-name").value,
    the_email: document.getElementById("the-email").value,
    the_business_type: document.getElementById("the-business-type").value, // استخدامه كـ Subject
    the_msg: document.getElementById("the-msg").value,
  };

  if (formData.the_name !== "") {
    validation++;
  }

  if (formData.the_phone !== "") {
    validation++;
  }

  if (formData.the_business_type !== "") {
    validation++;
  }

  if (formData.the_msg.length >= 50) {
    validation++;
  }

  if (validation === 4) {
    isValidData = true;
    console.log("good");
  } else {
    isValidData = false;
  }

  if (isValidData === true) {
    // إرسال البيانات إلى Supabase
    const { data, error } = await _supabase2
      .from("fill_form")
      .insert([formData])
      .then();
    if (error) {
      fillFormDiv.classList.add("error");
      fillFormFoundDiv.classList.add("active");
      setTimeout(() => {
        fillFormDiv.classList.remove("error");
        fillFormFoundDiv.classList.remove("active");
        fillFormDiv.classList.remove("unclick");
        loadingDiv.classList.remove("active");
      }, 4000);
    } else {
      fillFormDiv.classList.add("sent");
      fillFormSentDiv.classList.add("active");
      setTimeout(() => {
        fillFormDiv.classList.remove("sent");
        fillFormSentDiv.classList.remove("active");
        fillFormDiv.classList.remove("unclick");
        loadingDiv.classList.remove("active");
      }, 4000);
      contactForm.reset(); // تصفير الفورم
    }
  } else {
    fillFormInputsPlaceholders.forEach((ele) => {
      if (ele.value === "") {
        ele.classList.add("error");
      }
    });
    fillFormDiv.classList.add("error");
    fillFormErrorDiv.classList.add("active");
    setTimeout(() => {
      fillFormInputsPlaceholders.forEach((ele) => {
        ele.classList.remove("error");
      });
      fillFormDiv.classList.remove("error");
      fillFormErrorDiv.classList.remove("active");
      fillFormDiv.classList.remove("unclick");
      loadingDiv.classList.remove("active");
    }, 4000);
  }
});
