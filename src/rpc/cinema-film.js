import BaseCall from "@/rpc/base-call";
import {CinemaItem} from "@/modules/cinema-item";
import {Cinema} from "@/modules/cinema";
class CinemaFilm extends BaseCall {
  call(id){
    const film =  this._call('cinema/film/' + id)
      .then(data => {
        return new CinemaItem(data)
      })
    const schedule = this._call('cinema/film/' + id + '/schedule')

    return Promise.all([film, schedule])
      .then(el => new Cinema(el))
  }
}

export default CinemaFilm;
