<template>
    <div>
        <v-toolbar color='grey'>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Des. Web</v-toolbar-title>

            <v-spacer></v-spacer>

            <div
                v-for="item in items"
                :key="item.title"
                link
                >
                <v-btn text>
                    <v-icon @click="goTo(item.type)">{{ item.icon }}</v-icon>
                </v-btn>

            </div>
               

        </v-toolbar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            >
            <v-list-item>
                <v-list-item-avatar>
                <v-img src="../assets/Leo.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title>Leonardo</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                <v-list-item-icon @click="goTo(item.type)">
                    <v-icon class="pr-2">{{ item.icon }} </v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-icon>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home-outline', type:'home' },
          { title: 'Cards', icon: 'mdi-forum', type:'cards'},
          { title: 'Pokemon', icon: 'mdi-pokeball', type:'pokemon'},
          { title: 'Profile', icon: 'mdi-account', type:'profile'},
        ],
      }
    },
    methods:{
        goTo(name){
            this.$router.push(name)
        }
    }
  }
</script>

<style>

</style>