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
              single-line="true"
              solo
              clearable
              required
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              placeholder="Last name"
              single-line="true"
              solo
              clearable
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              placeholder="E-mail"
              single-line="true"
              solo
              clearable
              required
            ></v-text-field>
            <v-card v-if="email.length > 0" class="mb-4 mt-0">
              <v-card-title>You are signing up with</v-card-title>
              <v-card-subtitle>{{email}}</v-card-subtitle>
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
            <v-btn @click="validate" block color="deep-purple darken-3" dark>Sign Up</v-btn>
          </v-col>
          <v-col cols="12"></v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      name: "",
      firstname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      valid: true,
      nameRules: [v => !!v || "Name is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      show: false
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>