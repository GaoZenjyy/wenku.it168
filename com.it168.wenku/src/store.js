import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// let defaultcity = '上海';
// try {
//   if (localStorage.city) {
//     defaultcity = localStorage.city
//   }
// } catch (e) { }
export default new Vuex.Store({
  state: {
    // city: defaultcity,
    age: 1
  },
  actions: {
    // setCityName(context, city) {
    //   context.commit('changeCity', city)
    // }
  },
  mutations: {
    // changeCity(state, city) {
    //   state.city = city;
    //   try {
    //     localStorage.city = city
    //   } catch (e) { }

    // },
    mm(state, city) {
      state.age = city
    }
  },
  actions: {}
});
