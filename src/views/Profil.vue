<template>



    <div class = flexed>

        <div class = "flexitem">
    <v-card
            class="card"
            max-width="434"
            tile
    >
        <v-img
               height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
            <v-row
                    align="end"
                    class="fill-height"
            >
                <v-col
                        align-self="start"
                        class="pa-0"
                        cols="12"
                >
                    <v-avatar
                            class="profile"
                            color="grey"
                            size="164"
                            tile
                    >
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                </v-col>
                <v-col class="py-0">
                    <v-list-item
                            color="rgba(0, 0, 0, .4)"
                            dark
                    >
                        <v-list-item-content>
                            <v-list-item-title class="title">Max Mustermann</v-list-item-title>
                            <v-list-item-subtitle class="text">25, Dog-Lover, Germany </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-img>
    </v-card>
        </div>
      <div class ="flexitem">
          <table class="tg">
              <tr>
                  <th class="überschrift">visited </th>
                  <th class="überschrift">to visit</th>

              </tr>
              <tr>
                  <td class="tg-031e">Vereinigte staaten von amerika</td>
                  <td class="tg-031e">Lorem Ipsum</td>

              </tr>
              <tr>
                  <td class="tg-031e">Lorem Ipsum</td>
                  <td class="tg-031e">Lorem Ipsum</td>

              </tr>
              <tr>
                  <td class="tg-031e">Lorem Ipsum</td>
                  <td class="tg-031e">Lorem Ipsum</td>
              </tr>
              <tr>
                  <td class="tg-031e">Lorem Ipsum</td>
                  <td class="tg-031e">Lorem Ipsum</td>

              </tr>
              <tr>
                  <td class="tg-031e">Lorem Ipsum</td>
                  <td class="tg-031e">Lorem Ipsum</td>

              </tr>
              <tr>
                  <td class="tg-031e">Lorem Ipsum</td>
                  <td class="tg-031e">Lorem Ipsum</td>

              </tr>
          </table>

      </div>
    </div>

</template>

<script>

</script>

<style scoped>

    .flexed{
        background-image: url("https://images.freeimages.com/images/large-previews/f10/world-map-1451634.jpg");
        display: flex;
        flex-direction: row;
        justify-content: center;

    }

.tg{
    border: solid black;
    margin-left: 20%;
}

</style>


