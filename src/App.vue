<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app dark
            right
    >
      <v-list dense>

        <v-list-item link :to="{name:'Feed'}">
          <v-list-item-action>
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Feed</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'findFriends'}">
          <v-list-item-action>
            <v-icon>mdi-account-multiple-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>findFriends</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'friendslist'}">
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
            <v-list-item-title>Worldmap</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'addFoto'}">
          <v-list-item-action>
            <v-icon>mdi-camera</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>addPhoto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item item @click.stop="dialog=true">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-dialog
                  v-model="dialog"
                  max-width="350"
          >
              <v-card>
                  <v-card-title class="headline">Are you sure you wanna log out from your profile?</v-card-title>

                  <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                              color="light-blue lighten-3"
                              text
                              @click="dialog = false"
                      >
                          Yes
                      </v-btn>

                      <v-btn
                              color="light-blue lighten-3"
                              text
                              @click="dialog = false"
                      >
                          No
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-dialog>

        <v-list-item link :to="{name: 'hilfe'}">
          <v-list-item-action>
            <v-icon>mdi-help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name: 'Imprint'}">
          <v-list-item-action>
            <v-icon>mdi-account-card-details</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Imprint</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar app right dark
               src="http://picsum.photos/id/912/1920/100?blur">
      <v-toolbar-title>
          <v-btn text x-large :to="{name:'Startseite'}"
                 color="light-blue lighten-2"
                 style="font-family: 'Garden Grown US D'; font-size: 30px;"
          >
              Travelmap
          </v-btn>
          </v-toolbar-title>
      <v-spacer />

      <v-autocomplete v-model="model"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="search"
                      color="white"
                      hide-no-data
                      hide-selected
                      item-text="Description"
                      item-value="API"
                      placeholder="search..."
                      return-object>
      </v-autocomplete>

        <v-col class="shrink">
            <v-btn icon
                   @click="expand = !expand"
                >
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-expand-x-transition>
                <v-card
                        v-show="expand2"
                        height="100"
                        width="100"
                        class="mx-auto"
                ></v-card>
            </v-expand-x-transition>
        </v-col>


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

    <v-footer  app>
      <section class="cright">
        &copy; {{ new Date().getFullYear() }}
        <strong>Travelmap</strong>

      </section>
    </v-footer>

  </v-app>
</template>

<script>
  import Layout from './components/Layout'
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
          dialog: false,
      }
    },
    methods: {
    },
    created() {
       this.$router.push({name: 'Startseite'})
    }
  }
</script>

