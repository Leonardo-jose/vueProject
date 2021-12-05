<template>
  <div>
    <v-btn @click="fetch()">Fetch</v-btn>

    {{pkmn !==null ? pkmn.data.name : ''}}
    <img :src="pkmn !== null ? pkmn.data.sprites.front_default : ''"/>
  </div>
</template>

<script>

  export default {
    components: {
      
    },
    data(){
      return{
        pkmn(){
          return this.$store.pkmn
        }
      }
    },
    methods: {
      fetch() {
        console.log("ola")
      }
    },
    created(){
      this.$store.dispatch("fetchEvents")
    }
  }
</script>
