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
                  <th class="überschrift">Countries visited </th>
                  <th class="überschrift">Countries to visit</th>

              </tr>
              <tr>
                  <td class="tabellentext">The United States</td>
                  <td class="tabellentext">Peru</td>

              </tr>
              <tr>
                  <td class="tabellentext">Australia</td>
                  <td class="tabellentext">Great Britain</td>

              </tr>
              <tr>
                  <td class="tabellentext">New Zealand</td>
                  <td class="tabellentext">Botswana</td>

              </tr>
              <tr>
                  <td class="tabellentext">Italy</td>
                  <td class="tabellentext">Canada</td>

              </tr>
              <tr>
                  <td class="tabellentext">Spain</td>
                  <td class="tabellentext">Namibia</td>

              </tr>
              <tr>
                  <td class="tabellentext">South Africa</td>
                  <td class="tabellentext">Russia</td>

              </tr>
              <tr>
                  <td class="tabellentext">France</td>
                  <td class="tabellentext">Thailand</td>

              </tr>
              <tr>
                  <td class="tabellentext">Croatia</td>
                  <td class="tabellentext">Brazil</td>

              </tr>
              <tr>
                  <td class="tabellentext">Malaysia</td>
                  <td class="tabellentext">Colombia</td>

              </tr>
              <tr>
                  <td class="tabellentext">Austria</td>
                  <td class="tabellentext">Argentina</td>

              </tr>
              <tr>
                  <td class="tabellentext">The Netherlands</td>
                  <td class="tabellentext">Letia</td>





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
        height: 100%;
        width: 100%;

    }
    .flexitem{
        margin-top: 10%;
    }

.tg{
    border: solid black;
    margin-left: 20%;
    width: 550px;
}
.überschrift{

    font-size: xx-large;
    font-weight: bolder;
    text-decoration: underline black;
}
    .tabellentext{

        font-weight: bold;

    }

</style>


