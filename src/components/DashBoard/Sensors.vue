<template>
  <v-app>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h2 class="purple--text display-1 font-weight-light">Sensores</h2>
          <h5 class="purple--text title font-weight-thin">MONI - BB</h5>
        </v-col>

        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card width="90%">
              <v-card-title class="deep-purple--text darken-1--text">Temperatura</v-card-title>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Lectura más alta</th>
                        <th class="text-left">Lectura actual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>25°</td>
                        <td>20°</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card width="90%">
              <v-card-title class="deep-purple--text darken-1--text">Humedad</v-card-title>
            </v-card>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-card width="90%">
              <v-card-title class="deep-purple--text darken-1--text">Vibraciones</v-card-title>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "sensors",
  beforeMount() {
    if (this.$store.getters.user === null) {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
