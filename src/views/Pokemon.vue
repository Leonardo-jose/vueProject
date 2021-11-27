<template>
  <v-card
    elevation="20"
    max-width="1000"
    class="mx-auto"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="720"
    >
      <v-carousel-item
        v-for="(item, i) in pkmns"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/Leo.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Leo</v-list-item-title>
          <v-list-item-subtitle>PKMN Trainer</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch
            v-model="cycle"
            label="Cycle Slides"
            inset
          ></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        pkmns: [
          {src: require('../assets/045.png')},
          {src: require('../assets/101.png')},
          {src: require('../assets/257.png')},
          {src: require('../assets/262.png')},
          {src: require('../assets/658.png')},
          {src: require('../assets/380.png')},
        ],
      }
    },
  }
</script>

