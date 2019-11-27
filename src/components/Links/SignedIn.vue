<template>
  <v-bottom-navigation fixed grow color="deep-purple accent-4">
    <v-btn height="100%" to="/dashboard">
      <span>DashBoard</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn height="100%" to="/sensors">
      <span>Sensors</span>
      <v-icon>mdi-coolant-temperature</v-icon>
    </v-btn>
    <v-btn height="100%" to="/profile">
      <span>Profile</span>
      <v-icon>mdi-baby-face</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "signedIn"
};
</script>