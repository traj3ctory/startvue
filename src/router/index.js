import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("@/views/Home"),
        },
        {
            name: "list",
            path: "/list",
            component: () => import("@/views/List"),
        },
        {
            name: "form",
            path: "/form",
            component: () => import("@/views/Form"),
        },
        {
            name: "todo",
            path: "/todo",
            component: () => import("@/views/TodoPage"),
        },
        {
            name: "login",
            path: "/login",
            component: () => import("@/views/auth/Login"),
        },
        {
            name: "registration",
            path: "/registration",
            component: () => import("@/views/auth/Registration"),
        },
        {
            name: "contact",
            path: "/contact",
            component: () => import("@/views/auth/Contact"),
        },
        {
            name: "userlist",
            path: "/userlist",
            component: () => import("@/views/UserList"),
        },
        {
            name: "quiz",
            path: "/quiz",
            component: () => import("@/views/Question"),
        },
        {
            name: "start",
            path: "/start",
            component: () => import("@/views/Start"),
        },
        {
            name: "NotFound",
            path: "*",
            component: () => import("@/views/404"),
        }
    ]
})