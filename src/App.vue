<template>
  <div>
    <v-app>
      <v-content>
        <div>
          <router-link to="/Login"><v-btn>Login</v-btn></router-link>
        </div>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>


<script>

export default {


  data: () => ({
    //
  }),
};
</script>
