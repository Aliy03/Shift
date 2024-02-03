import rooms from "@/modules/enums/rooms";

const moment = require('moment');
moment.locale('ru');
export class Room {
  constructor(room) {
    this.id = room._id
    this.room = rooms[room.room]
    this.times = room.times
      .sort((a,b) => new Date(a) - new Date(b))
      .map(el => moment(el).format('HH:mm'))
  }

  getRoom() {
    return this.room
  }

  getTimes() {
    return this.times
  }

  getId() {
    return this.id
  }
}
