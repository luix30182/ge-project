<template>
  <v-bottom-navigation fixed grow color="deep-purple accent-4">
    <v-btn height="100%" to="/">
      <span>Sign In</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn height="100%">
      <span>Sign Up</span>
      <v-icon>mdi-account-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "signedOut"
};
</script>