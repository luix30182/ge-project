<template>
  <div>
    <SignedIn user="user" v-if="$store.getters.user" />
    <SignedOut v-if="$store.getters.user == null" />
  </div>
</template>

<script>
import SignedIn from "../Links/SignedIn";
import SignedOut from "../Links/SignedOut";

export default {
  name: "navBar",
  components: {
    SignedIn,
    SignedOut
  },
  data() {
    return {
      useri: this.user
    };
  },
  computed: {
    user: function() {
      return this.$route.params.user || null;
    }
  }
};
</script>
