<template>
  <div>
    <SignedIn v-if="test" />
    <SignedOut v-if="!test" />
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
      test: true
    };
  }
};
</script>