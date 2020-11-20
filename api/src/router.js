import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import LogIn from "./pages/LogIn.vue";
import SignUp from "./pages/SignUp.vue";
import User from "./pages/UserHome.vue";
import UserJoin from "./pages/UserJoin.vue";
import UserCheck from "./pages/UserCheck.vue";
import UserRequest from "./pages/UserRequest.vue";
import Driver from "./pages/DriverHome.vue";
import DriverStart from "./pages/DriverStart.vue";
import DriverRequests from "./pages/DriverRequests.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { name: "home-page", path: "/", component: Home },
    { name: "sign-up", path: "/sign-up", component: SignUp },
    { name: "log-in", path: "/log-in", component: LogIn },
	{ name: "user-home", path: "/user", component: User},
	{ name: "user-join", path: "/user/join", component: UserJoin},
	{ name: "user-check", path: "/user/check", component: UserCheck},
	{ name: "user-request", path: "/user/request", component: UserRequest),
	{ name: "driver-home", path: "/driver", component: Driver},
	{ name: "driver-start", path: "/driver/start", component: DriverStart},
	{ name: "driver-requests", path: "/driver/requests", component: DriverRequests}
  ]
});
