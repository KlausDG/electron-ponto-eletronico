<template>
  <div class="container">
    <p class="user">Usuário: <span class="user-name">{{$route.params.id}}</span></p>

    <section class="table-container">
      <table>
        <h3>Manhâ</h3>
        <tr>
          <td>Entrada</td>
          <td>Não Registrado</td>
        </tr>
        <tr>
          <td>Saída</td>
          <td>Não Registrado</td>
        </tr>
      </table>
      <table>
        <h3>Tarde</h3>
        <tr>
          <td>Entrada</td>
          <td>Não Registrado</td>
        </tr>
        <tr>
          <td>Saída</td>
          <td>Não Registrado</td>
        </tr>
      </table>
    </section>
    <div class="datetime">
      <h2 class="current-date">{{date}}</h2>
      <p class="current-hour">{{time}}</p>
    </div>
    <my-button :onClick="register" :width="'150px'" :height="'75px'">Registrar Entrada</my-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      time: ""
    };
  },

  created() {
    setInterval(this.getNow, 1000);
  },

  methods: {
    getNow: function() {
      const today = new Date();
      let date =
        this.format(today.getDate()) +
        "/" +
        this.format(today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      let time =
        this.format(today.getHours()) +
        ":" +
        this.format(today.getMinutes()) +
        ":" +
        this.format(today.getSeconds());

      this.date = date;
      this.time = time;
    },

    format: function(param) {
      return ("0" + param).slice(-2);
    },

    register: function() {
      this.$emit("recordEntry", {date: this.date, time: this.time})
      console.log("clickou");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.table-container {
  display: flex;
}

.user {
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;

  &-name {
    color: red;
  }
}

.datetime {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  .current-date {
    font-size: 38px;
    font-weight: 700;
    text-align: center;
  }

  .current-hour {
    text-align: center;
    font-size: 42px;
    color: $color-contrast;
    font-weight: bolder;
  }
}

table {
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.2),
    4px 4px 10px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 5px;
  background: #fff;

  &:first-child {
    margin-right: 30px;
  }

  h3 {
    font-size: 28px;
    color: $color-test;
    margin: 0 0 15px 0;
  }

  td {
    color: $color-primary-normal;

    &:nth-child(odd) {
      font-weight: 700;
      padding-right: 75px;
    }
  }
}
</style>