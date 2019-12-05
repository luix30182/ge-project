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
                      <tr v-for="(x,i) in temperatures" :key="i">
                        <td>{{ x['date'] }}</td>
                        <td>{{ x['temp'] }}</td>
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
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Fecha</th>
                        <th class="text-left">Lectura</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>25°</td>
                        <td>20°</td>
                      </tr>
                      <tr v-for="(x,i) in humiditys" :key="i">
                        <td>{{ x['date'] }}</td>
                        <td>{{ x['hum'] }}</td>
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
              <v-card-title class="deep-purple--text darken-1--text">Vibraciones</v-card-title>
              <v-card-text>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Fecha</th>
                        <th class="text-left">Lectura</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>25°</td>
                        <td>20°</td>
                      </tr>
                      <tr v-for="(x,i) in vibrations" :key="i">
                        <td>{{ x['date'] }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/database";
var moment = require("moment");

export default {
  name: "sensors",
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
    getDateF: function(date) {
      return moment(date, "MM-DD-YYYY");
    }
  },
  beforeMount() {
    if (this.$store.getters.user === null) {
      this.$router.push({
        name: "home"
      });
    } else {
      this.getTemperature();
    }
  }
};
</script>
