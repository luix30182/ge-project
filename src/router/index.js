import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import DashBoard from "../views/DashBoard.vue";
import Profile from "../components/DashBoard/Profile";
import Sensors from "../components/DashBoard/Sensors.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/sensors",
    name: "sensors",
    component: Sensors
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
