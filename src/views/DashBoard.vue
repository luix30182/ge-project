<template>
  <v-app>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h2 class="purple--text display-1 font-weight-light">Resumen</h2>
          <h5 class="purple--text title font-weight-thin">MONI - BB</h5>
        </v-col>

        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col cols="12" class="deep-purple lighten-4 pa-2">
              <v-row>
                <v-col cols="6" offset="2">
                  <h4>Temperatura</h4>
                  <span>34°</span>
                </v-col>
                <v-col cols="3">
                  <v-icon class="yellow--text" size="50">mdi-baby-face-outline</v-icon>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" class="deep-purple lighten-4 pa-2 mt-1">
              <v-row>
                <v-col cols="6" offset="2">
                  <h4>Humedad</h4>
                  <span>34°</span>
                </v-col>
                <v-col cols="3">
                  <v-icon class="green--text" size="50">mdi-baby-face-outline</v-icon>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" class="deep-purple lighten-4 pa-2 mt-1">
              <v-row>
                <v-col cols="6" offset="2">
                  <h4>Vibracion</h4>
                  <span>34°</span>
                </v-col>
                <v-col cols="3">
                  <v-icon class="red--text" size="50">mdi-baby-face-outline</v-icon>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      temperature: null,
      humidity: null,
      vibration: null
    };
  },
  beforeMount() {
    if (this.$store.getters.user === null) {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
