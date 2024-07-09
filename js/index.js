import { homePage } from "./home.js";
homePage.getCategore();
const home = document.querySelector(".home");

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".detail").classList.add("d-none");
  home.classList.remove("d-none");
});
