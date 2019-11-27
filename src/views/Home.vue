<template>
  <v-app>
    <NavBar />
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/navBar/NavBar";
export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>
