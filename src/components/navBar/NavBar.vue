  <template>
  <SignedIn />
</template>


<script>
import SignedIn from "../Links/SignedIn";
//import SignedOut from "../Links/SignedOut";

export default {
  name: "navBar",
  components: {
    SignedIn
    //  SignedOut
  },
  data() {
    return {};
  }
};
</script>