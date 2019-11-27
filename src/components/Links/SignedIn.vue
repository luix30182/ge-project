<template>
  <v-bottom-navigation fixed grow color="deep-purple accent-4">
    <v-btn height="100%">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn height="100%">
      <span>Temperature</span>
      <v-icon>mdi-coolant-temperature</v-icon>
    </v-btn>
    <v-btn height="100%">
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