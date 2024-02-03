import {Room} from "@/modules/room";

const moment = require('moment');
moment.locale('ru');

export class CinemaInfo {
  constructor(item) {
    this.startDate = item.startDate;
    this.endDate = item.endDate;
    this.room = this._initRoom(item.room);
    this.id = item._id;
  }

  _initRoom(room) {
    return room
      .sort(function(a, b) {
        if (a.room < b.room) {
          return -1;
        }
        if (a.room > b.room) {
          return 1;
        }

        return 0;
      })
      .map(el => new Room(el));
  }

  _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getDays() {
    let days = moment(this.startDate).format('dd, D MMM');
    days = days.endsWith('.') ? days.slice(0, -1) : days;
    return this._capitalizeFirstLetter(days)
  }

  getRooms() {
    return this.room
  }

  getId() {
    return this.id
  }

  getTimes() {
    return this.times
  }
}
