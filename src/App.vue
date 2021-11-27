<template>
  <v-app>
    <Toolbar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Toolbar from '@/components/Toolbar.vue'
  import Footer from '@/components/Footer.vue'
  


export default {
  name: 'App',

  components: {
      Toolbar,
      Footer,
      },

  data: () => ({
    //
  }),
};
</script>
