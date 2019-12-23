<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app dark
            right
    >
      <v-list dense>
        <v-list-item link :to="{name:'findFriends'}">
          <v-list-item-action>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>myFriends</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'interaktiveWeltkarte'}">
          <v-list-item-action>
            <v-icon>mdi-map</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Weltkarte</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'addFoto'}">
          <v-list-item-action>
            <v-icon>mdi-camera</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>addFoto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'TicketLaden'}">
          <v-list-item-action>
            <v-icon>mdi-airplane</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>addTicket</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'PinSetzen'}">
          <v-list-item-action>
            <v-icon>mdi-pin</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>addPin</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name: 'Hilfe'}">
          <v-list-item-action>
            <v-icon>mdi-help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Hilfe</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app right dark
               src="http://picsum.photos/id/912/1920/100?blur">
      <v-toolbar-title>Travelmap</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon :to="{name:'Registration'}">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <v-btn icon :to="{name:'Profil'}">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
    </v-app-bar>

    <v-content light>
      <v-container fluid class="fill-height">
        <router-view  @login="isLoggedIn=$event"/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Layout from './components/Layout';
  export default {
    name: 'App',
    components: {
      Layout
    },
    props: {
      source: String
    },
    data() {
      return {
        isLoggedIn: false,
        drawer: false,
      }
    },
    methods: {
    },
    created() {
      // this.$router.push({name: 'Overview'})
    }
  }
</script>