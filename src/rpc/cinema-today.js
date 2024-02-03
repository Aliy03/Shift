import BaseCall from "@/rpc/base-call";
import {CinemaItem} from "@/modules/cinema-item";
class CinemaToday extends BaseCall {
  call(){
    return this._call('cinema/today')
      .then(data => {
        return data.map(item => new CinemaItem(item))
      })
  }
}

export default CinemaToday;
