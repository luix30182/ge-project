<template>
  <v-app>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col>
            <h1 class="purple--text">Log In</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              placeholder="E-mail"
              :single-line="true"
              solo
              :clear-icon-cb="clearSearchA"
              required
            ></v-text-field>
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Password"
              hint="At least 8 characters"
              class="input-group--focused"
              @click:append="show = !show"
              solo
              clearable
              v-model="password"
            ></v-text-field>

            <v-btn @click="logIn" block color="deep-purple darken-3" dark
              >Log In</v-btn
            >
            <v-snackbar v-model="snackbar" :timeout="2000">
              {{ text }}
              <v-btn color="pink" text @click="snackbar = false">
                Close
              </v-btn>
            </v-snackbar>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebaseInit";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length) >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      show: false,
      text: "",
      snackbar: false,
      user: null
    };
  },
  methods: {
    clearSearchA() {
      this.email = "";
    },
    logIn: function() {
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            db.collection("geusers")
              .doc(user.user.uid)
              .get()
              .then(doc => {
                if (!doc.exists) {
                  this.$refs.form.reset();
                  this.text = "Error the user doesn't exist";
                  this.snackbar = true;
                } else {
                  this.user = {
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    email: doc.data().email,
                    uid: user.user.uid
                  };
                  this.$store.commit("change", this.user);
                  this.$router.push({
                    name: "dashboard"
                  });
                }
              })
              .catch(() => {
                this.$refs.form.reset();
                this.text = "Error getting your data";
                this.snackbar = true;
              });
          })
          .catch(() => {
            this.text = "Error in login";
            this.snackbar = true;
          });
      } else {
        this.text = "Verify your data";
        this.snackbar = true;
      }
    }
  }
};
</script>
