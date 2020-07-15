<template>
  <div class="login-container flex-column">
    <img src="../../src/assets/logo.png" alt="Logo" />
    <div class="flex-column">
      <label for="user_code_input">Código de Usuário:</label>
      <input type="text" name="user_code" id="user_code_input" v-model="input" placeholder="0000" />
    </div>
    <my-button :onClick="login" :width="'130px'" :height="'50px'">Entrar</my-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },

  methods: {
    login() {
      this.$emit("userCode", this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-column {
  display: flex;
  flex-direction: column;
}

.login-container {
  height: 100%;
  align-items: center;
}

img {
  width: 300px;
  height: 300px;
  margin: 30% 0 30% 0;
}

label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
}

input[type="text"] {
  @include box_shadow(2);
  height: 50px;
  width: 300px;
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  border-radius: 3px;
  margin-bottom: 30px;
  padding-left: 10px;
  background-color: white;
  font-size: 18px;

  &::placeholder {
    color: darken($color-gray, 10);
  }

  &:focus {
    outline: none;
  }
}
</style>