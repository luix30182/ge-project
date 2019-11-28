<template>
  <v-app>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h2 class="purple--text display-1 font-weight-light">Dashboard</h2>
          <h5 class="purple--text title font-weight-thin">MONI - BB</h5>
        </v-col>

        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-img
              src="../assets/bb.png"
              max-width="160"
              max-height="250"
            ></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "dashboard",
  beforeMount() {
    if (this.$store.getters.user === null) {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
