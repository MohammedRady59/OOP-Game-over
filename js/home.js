import { newObj } from "./ui.js";
const loading = document.querySelector(".loading");
const links = document.querySelectorAll(".nav-link");

class Home {
  constructor() {}
  getCategore() {
    links.forEach((el) => {
      el.addEventListener("click", async (e) => {
        const category = el.dataset.category;
        links.forEach((el) => {
          el.classList.remove("active");
        });
        el.classList.add("active");
        const dataArray = await this.getDataAPI(category);

        newObj.renderHome(dataArray);
      });
    });
  }

  async getDataAPI(categoryName) {
    try {
      loading.classList.remove("d-none");

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "0f3d85454fmsh83f8de5e39ed638p16fb03jsn8ddc425d786b",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const res = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}
        `,
        options
      );
      if (!res.ok) throw new Error("Failed Api 🔴🔴");
      const data = await res.json();
      loading.classList.add("d-none");
      return data;
    } catch (error) {
      console.log(error.mesaage);
    }
  }
}

export const homePage = new Home();
const x = await homePage.getDataAPI("mmorpg");
newObj.renderHome(x);
