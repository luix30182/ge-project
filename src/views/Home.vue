<template>
  <v-app>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h1 class="purple--text text-center">Bienvenido</h1>
        </v-col>
        <v-col cols="12">
          <h3 class="purple--text text-center display-3 font-weight-thin">MONI-BB</h3>
        </v-col>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-img src="../assets/bb.png" max-width="160" max-height="250"></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
// import "firebase/firestore";
// import db from "../firebaseInit";

export default {
  data() {
    return {};
  },
  methods: {
    // uploadData: function() {
    //   fetch(
    //     "https://gist.githubusercontent.com/luix30182/039b1097a429cad50158027670aaf1ee/raw/e8fb66666fd6ac76f8a83405ff84a1ad836a24fb/temperatures.json"
    //   )
    //     .then(response => response.json())
    //     .then(json => {
    // // const onj = JSON.parse(json);
    //       for (let x in json) {
    //         if (x > 50) {
    //           db.collection("temperatures")
    //             .doc()
    //             .set({
    //               date: json[x].date,
    //               temp: json[x].temp
    //             })
    //             .then(() => {
    //               console.log("success");
    //             })
    //             .catch(err => {
    //               console.log(err);
    //             });
    //         }
    //       }
    //     });
    // }
  },
  mounted() {}
};
</script>