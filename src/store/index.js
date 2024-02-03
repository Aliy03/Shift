import { createStore } from 'vuex'
import rpc from '@/store/rpc'
import bye from '@/store/bye'

export default createStore({
  modules: {
    rpc: rpc,
    bye: bye
  },
})
