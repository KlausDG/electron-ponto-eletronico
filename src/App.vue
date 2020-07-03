<template>
  <v-app >
    <v-content class="grey lighten-5">
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  bg-color {
    background: red !important;
  }
</style>
