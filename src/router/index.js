import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "",
            path: "/home",
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
            name: "question",
            path: "/question",
            component: () => import("@/views/Question"),
        },
        {
            name: "start",
            path: "/start",
            component: () => import("@/views/Start"),
        }
    ]
})