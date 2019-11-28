<template>
  <v-bottom-navigation grow color="deep-purple accent-4">
    <v-btn height="100%" to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn height="100%" to="/login">
      <span>Log In</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn height="100%" to="/signup">
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
