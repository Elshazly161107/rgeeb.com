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
