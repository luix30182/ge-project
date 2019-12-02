<template>
  <v-bottom-navigation grow fixed color="deep-purple accent-4">
    <v-btn height="100%" to="/dashboard">
      <span>Resumen</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn height="100%" to="/sensors">
      <span>Sensores</span>
      <v-icon>mdi-coolant-temperature</v-icon>
    </v-btn>
    <v-btn height="100%" to="/profile">
      <span>Perfil</span>
      <v-icon>mdi-baby-face</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "signedIn",
  props: {
    user: null
  }
};
</script>
