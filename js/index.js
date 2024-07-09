import { homePage } from "./home.js";
homePage.getCategore();

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".detail").classList.add("d-none");
});
