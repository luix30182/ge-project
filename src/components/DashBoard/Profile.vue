<template>
  <v-app>
    <v-form ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="purple--text">Profile</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="firstname"
              placeholder="First name"
              :single-line="singleLine"
              solo
              clearable
              :disabled="edit"
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              placeholder="Last name"
              :single-line="singleLine"
              solo
              clearable
              :disabled="edit"
            ></v-text-field>
            <v-text-field
              background-color="deep-purple lighten-5"
              v-model="email"
              :single-line="singleLine"
              solo
              disabled
            ></v-text-field>
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Password"
              hint="At least 8 characters"
              class="input-group--focused"
              @click:append="show = !show"
              solo
              clearable
              v-model="password"
              :disabled="edit"
            ></v-text-field>
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              placeholder="New password"
              hint="At least 8 characters"
              class="input-group--focused"
              @click:append="show = !show"
              solo
              clearable
              v-model="newpassword"
              :disabled="edit"
            ></v-text-field>
            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Confirm Password"
              hint="At least 8 characters"
              class="input-group--focused"
              @click:append="show = !show"
              solo
              clearable
              v-model="passwordConfirm"
              :disabled="edit"
            ></v-text-field>
            <v-btn v-if="edit" @click="edit = !edit" block color="deep-purple darken-3" dark>Edit</v-btn>
            <v-btn v-if="!edit" @click="edit = !edit" block color="deep-purple accent-1" dark>Save</v-btn>
            <v-btn class="mt-3" v-if="!edit" @click="edit = !edit" block color="error" dark>Cancel</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      newpassword: "",
      valid: true,
      rules: {
        min: v => (v && v.length) >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      show: false,
      singleLine: true,
      edit: true
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
  },
  beforeMount() {
    this.firstname = "Mario";
    this.lastname = "Martinez";
    this.email = "mario@example.com";
  }
};
</script>