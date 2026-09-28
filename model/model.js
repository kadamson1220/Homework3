import home from "../pages/home.js";
import about from "../pages/about.js";
import services from "../pages/services.js";
import contact from "../pages/contact.js";
import faq from "../pages/faq.js";

export function loadPage(pageID) {
  console.log(`model.js: ${pageID}`);
  const main = document.querySelector("main");

  switch (pageID) {
    case "home":
      main.innerHTML = home;
      break;
    case "about":
      main.innerHTML = about;
      break;
    case "services":
      main.innerHTML = services;
      break;
    case "contact":
      main.innerHTML = contact;
      break;
    case "faq":
      main.innerHTML = faq;
      break;
  }
}
