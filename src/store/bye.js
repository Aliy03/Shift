import {BuyModel} from "@/modules/buy-model";
export default {
  namespaced: true,

  state: {
    byeModel: null
  },

  mutations: {
    setByeModel(state, payload) {
      state.byeModel = payload
    }
  },

  actions: {
    INIT_BYE_MODEL(context) {
      context.commit('setByeModel', new BuyModel());
    }
  },

  getters: {
    getByeModel(state) {
      return state.byeModel;
    },
  }
};
