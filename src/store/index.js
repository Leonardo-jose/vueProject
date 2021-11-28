import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cards:[
      {name:"Potion", src: require("../assets/potion.png")},
      {name:"Super Potion", src: require("../assets/superpotion.png")}, 
      {name:"Hyper Potion", src: require("../assets/hyperpotion.png")}, 
      {name:"Full Restore", src: require("../assets/fullrestore.png")}, 
      {name:"Full Heal", src: require("../assets/full-heal.png")}, 
      {name:"PokeBall", src: require("../assets/pokeball.png")}, 
      {name:"GreatBall", src: require("../assets/greatball.png")}, 
      {name:"UltraBall", src: require("../assets/ultraball.png")},
    ],
  },
  mutations: { },
  actions: {},
  getters: { }
})