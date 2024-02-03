import {CinemaInfo} from "@/modules/cinema-info";
export class Cinema{
  constructor([film, data]) {
    this.film = film
    this.date = data
      .sort((a,b) => new Date(a.startDate) - new Date(b.startDate))
      .map(el => new CinemaInfo(el))
  }

  getFilm() {
    return this.film;
  }

  getDate() {
    return this.date;
  }
}
