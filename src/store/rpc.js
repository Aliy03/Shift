import CinemaToday from "@/rpc/cinema-today";
import CinemaFilm from "@/rpc/cinema-film";

export default {
  namespaced: true,
  state: {
    cinemaToday: [],
    cinemaFilm: {}
  },

  mutations: {
    setCinemaToday(state, payload) {
      state.cinemaToday = payload
    },

    setCinemaFilm(state, payload) {
      state.cinemaFilm = payload
    }
  },
  actions: {
    CINEMA_TODAY(context){
      new CinemaToday().call()
        .then( response => {
          context.commit('setCinemaToday', response);
        })
        .catch(error => {
          console.error(error);
        });
    },

    CINEMA_FILM(context, id){
      new CinemaFilm().call(id)
        .then( response => {
          context.commit('setCinemaFilm', response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  getters: {
    getCinemaToday(state) {
      return state.cinemaToday
    },

    getCinemaFilm(state) {
      return state.cinemaFilm
    }
  }
}
