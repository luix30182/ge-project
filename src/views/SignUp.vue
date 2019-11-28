<template>
  <v-app>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col>
            <h1 class="purple--text">Sign up with us</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              placeholder="First name"
              :single-line="singleLine"
              solo
              clearable
              required
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              placeholder="Last name"
              :single-line="singleLine"
              solo
              clearable
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              placeholder="E-mail"
              :single-line="singleLine"
              solo
              type="email"
              clearable
              required
            ></v-text-field>
            <v-card v-if="email.length > 0" class="mb-4 mt-0">
              <v-card-title>You are signing up with</v-card-title>
              <v-card-subtitle>{{ email }}</v-card-subtitle>
            </v-card>
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
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Confirm Password"
              hint="At least 8 characters"
              class="input-group--focused"
              @click:append="show = !show"
              solo
              clearable
              v-model="passwordConfirm"
            ></v-text-field>
            <v-btn @click="signIn" block color="deep-purple darken-3" dark
              >Sign Up</v-btn
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
import "firebase/firestore";
import db from "../firebaseInit";

export default {
  name: "signup",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      valid: true,
      nameRules: [v => !!v || "Name is required"],
      emailRules: [
        v => (!!v && v.length > 0) || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length) >= 8 || "Min 8 characters"
      },
      show: false,
      singleLine: true,
      text: "",
      snackbar: false
    };
  },
  methods: {
    signIn: function() {
      if (this.$refs.form.validate()) {
        if (this.password === this.passwordConfirm) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.email.trim().toLowerCase(),
              this.password.trim().toLowerCase()
            )
            .then(user => {
              db.collection("geusers")
                .doc(user.user.uid)
                .set({
                  firstName: this.firstname.trim(),
                  lastName: this.lastname.trim(),
                  email: this.email.trim()
                })
                .then(() => {
                  this.text = "Account created";
                  this.snackbar = true;
                  this.$refs.form.reset();
                  this.email = "";
                })
                .catch(err => {
                  console.log(err);
                  this.text = "Error creating user data";
                  this.snackbar = true;
                });
            })
            .catch(e => {
              console.log(e);
              this.text = "Error creating user";
              this.snackbar = true;
            });
        } else {
          this.text = "Verify your password";
          this.snackbar = true;
        }
      }
    }
  }
};
</script>
