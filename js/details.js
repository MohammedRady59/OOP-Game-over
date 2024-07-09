import { newObj } from "./ui.js";

class Details {
  constructor() {}
  async takeId(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0f3d85454fmsh83f8de5e39ed638p16fb03jsn8ddc425d786b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );
      const result = await response.json();

      newObj.renderDetail(result);
    } catch (error) {
      console.error(error);
    }
  }
}

export const detailPage = new Details();
