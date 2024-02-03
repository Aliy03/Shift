export class BuyModel {
  constructor() {
      this.series = '';
      this.chair = '';
      this.day = '';
      this.time = '';
      this.hall = ''
  }

  setSeries(series) {
    this.series = series;
  }

  setChair(chair) {
    this.chair = chair;
  }

  setDay(day) {
    this.day = day;
  }

  setTime(time) {
    this.time = time;
  }

  setHall(hall) {
    this.hall = hall
  }

  getData() {
    return {
      series: this.series,
      chair: this.chair,
      day: this.day,
      time: this.time,
    }
  }
}
