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
                  <span>{{ temperatures[temperatures.length-1]['temp'] }}%</span>
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
                  <span>{{ humiditys[humiditys.length-1]['hum'] }}%</span>
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
                  <span>{{ vibrations[vibrations.length-1]['date'] }}</span>
                </v-col>
                <v-col cols="3">
                  <v-icon class="green--text" size="50">mdi-baby-face-outline</v-icon>
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
import * as firebase from "firebase/app";
import "firebase/database";
// import db from "../firebaseInit";

export default {
  name: "dashboard",
  data() {
    return {
      temperature: null,
      temperatures: [],
      humidity: null,
      humiditys: [],
      vibration: null,
      vibrations: []
    };
  },
  methods: {
    getTemperature: function() {
      const dataBase = firebase.database();
      const temp = dataBase.ref("temperatures");
      temp.once("value", snapshot => {
        snapshot.forEach(childSnapshot => {
          this.temperatures.push(childSnapshot.val());
        });
      });

      const temp2 = dataBase.ref("humidity");
      temp2.once("value", snapshot => {
        snapshot.forEach(childSnapshot => {
          this.humiditys.push(childSnapshot.val());
        });
      });

      const temp3 = dataBase.ref("vibration");
      temp3.once("value", snapshot => {
        snapshot.forEach(childSnapshot => {
          this.vibrations.push(childSnapshot.val());
        });
      });
    },
    getTemperatureAverga: function() {
      /* eslint-disable no-unused-vars */
      const av = this.temperatures.reduce((a, b) => {
        a + b.temp;
      });
      //console.log(av);
    }
  },
  beforeMount() {
    if (this.$store.getters.user === null) {
      this.$router.push({
        name: "home"
      });
    } else {
      this.getTemperature();
      //this.getTemperatureAverga();
    }
  }
};
</script>
