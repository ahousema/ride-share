import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import LogIn from "./pages/LogIn.vue";
import SignUp from "./pages/SignUp.vue";
import UserHome from "./pages/UserHome.vue";
import UserJoin from "./pages/UserJoin.vue";
import UserCheck from "./pages/UserCheck.vue";
import DriverHome from "./pages/DriverHome.vue";
import DriverStart from "./pages/DriverStart.vue";
import UserDriver from "./pages/UserDriver.vue";

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
    { name: "user-check", path: "/user-check", component: UserCheck },
    { name: "driver-home", path: "/driver-home", component: DriverHome },
    { name: "driver-start", path: "/driver-start", component: DriverStart },
	{ name: "user-driver", path: "/user-driver", component: UserDriver }
  ]
});
