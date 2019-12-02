<template>
  <v-app id="scroll-area-1">
    <v-form ref="form" v-model="valid" class="mb-7">
      <v-container>
        <v-row>
          <v-col>
            <h1 class="purple--text">Perfil</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="firstname"
              placeholder="First name"
              :single-line="singleLine"
              background-color="deep-purple lighten-5"
              solo
              :disabled="edit"
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              placeholder="Last name"
              :single-line="singleLine"
              background-color="deep-purple lighten-5"
              solo
              :disabled="edit"
            ></v-text-field>
            <v-text-field
              background-color="deep-purple lighten-5"
              v-model="email"
              :single-line="singleLine"
              solo
              disabled
            ></v-text-field>
            <!-- <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              placeholder="Contraseña"
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
              placeholder="Nueva contraseña"
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
              placeholder="Confirmar contraseña"
              hint="At least 8 characters"
              class="input-group--focused"
              @click:append="show = !show"
              solo
              clearable
              v-model="passwordConfirm"
              :disabled="edit"
            ></v-text-field>-->
            <!-- <v-btn v-if="edit" @click="edit = !edit" block color="deep-purple darken-3" dark>Editar</v-btn>
            <v-btn
              v-if="!edit"
              @click="edit = !edit"
              block
              color="deep-purple accent-1"
              dark
            >Guardar</v-btn>-->
            <v-btn class="mt-3" v-if="!edit" @click="edit = !edit" block color="error" dark>Cancelar</v-btn>
            <v-btn class="my-4" @click="logout" block color="error" dark>Cerrar sesion</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

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
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("change", null);
          this.$router.push({
            name: "home"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  beforeMount() {
    if (this.$store.getters.user !== null) {
      this.firstname = this.$store.getters.user.firstName;
      this.lastname = this.$store.getters.user.lastName;
      this.email = this.$store.getters.user.email;
    } else {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
