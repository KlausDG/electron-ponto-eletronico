<template>
  <div class="main-container">
    <router-view @userCode="login" @recordEntry="recordEntry" />
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import router from "./router";

export default {
  name: "App",

  data() {
    return {
      input: ""
    };
  },

  methods: {
    login(value) {
      ipcRenderer.send("login", value);
      ipcRenderer.on("login", (event, res) => {
        console.log(res);
        router.push({ path: `/user/${value}` });

      });
    },
    recordEntry(value){
      ipcRenderer.send("recordEntry", value);
      ipcRenderer.on("recordEntry", (event, res) => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: $font-nunito;
}

p {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  background: #fcfbfc;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.main-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
