<template>
  <div class="full-height d-flex align-center">
    <v-container>
      <v-img></v-img>
      <v-form class="center d-flex flex-column align-center justify-center">
        <v-text-field
          class="input-width"
          label="0000"
          prepend-icon="mdi-map-marker"
          hint="Entre com seu código no campo acima."
          persistent-hint
          solo
          filled
        ></v-text-field>
        <v-btn
          large
          color="primary"
          :loading="loading"
          :disabled="loading"
          @click="loader = 'loading'"
        >Entrar</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
.center {
  height: 100%;
  margin: auto 0;
}
.input-width {
    width: 300px;
}
</style>