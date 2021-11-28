<template>
  <div>
    <v-row>
      <v-col
        v-for="(data, i ) in MyCards"
        :key="i"
        cols="12"
        sm="4"
      >
        <MyCard :cardId="i" :cardInfo="data.name"  :src="data.src"></MyCard>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import MyCard from '../components/MyCard.vue'

export default {
  name:'Cards',

  components: {
    MyCard,
  },
  computed:{
    MyCards(){
      return this.$store.state.cards
    }
  }
}
</script>
