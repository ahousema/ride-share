import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import LogIn from "./pages/LogIn.vue";
import SignUp from "./pages/SignUp.vue";
import UserHome from "./pages/UserHome.vue";
import UserJoin from "./pages/UserJoin.vue";
import UserRequest from "./pages/UserRequest.vue";
import UserCheck from "./pages/UserCheck.vue";
import DriverHome from "./pages/DriverHome.vue";
import DriverRequests from "./pages/DriverRequests.vue";
import DriverStart from "./pages/DriverStart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { name: "home-page", path: "/", component: Home },
    { name: "sign-up", path: "/sign-up", component: SignUp },
    { name: "log-in", path: "/log-in", component: LogIn },
    { name: "user-home", path: "/user-home", component: UserHome },
    { name: "user-join", path: "/user-join", component: UserJoin },
    { name: "user-request", path: "/user-request", component: UserRequest },
    { name: "user-check", path: "/user-check", component: UserCheck },
    { name: "driver-home", path: "/driver-home", component: DriverHome },
    { name: "driver-requests", path: "/driver-requests", component: DriverRequests },
    { name: "driver-start", path: "/driver-start", component: DriverStart },
  ]
});
