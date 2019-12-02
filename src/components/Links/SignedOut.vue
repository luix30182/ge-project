<template>
  <v-bottom-navigation fixed grow color="deep-purple accent-4">
    <v-btn height="100%" to="/">
      <span>Inicio</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn height="100%" to="/login">
      <span>Ingresar</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn height="100%" to="/signup">
      <span>Crear cuenta</span>
      <v-icon>mdi-account-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "signedOut"
};
</script>
