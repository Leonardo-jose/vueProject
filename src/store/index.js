import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

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
    pkmn: [],
  },
  mutations: { 
    SET_PKMN(state, payload){
      state.pkmn=payload
    }
  },
  actions: { 
    fetchEvents({commit}){
      axios.get("https://pokeapi.co/api/v2/pokemon/1")
        .then(res=>{
          const payload = res
          console.log(payload)
          commit('SET_PKMN', payload)
        })
        .catch(err=>{console.log(err)})
    }
  },
  getters: { }
})