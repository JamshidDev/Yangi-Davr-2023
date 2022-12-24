import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../Layouts/LayoutPage.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        meta: { isHidden: false },
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/Home/HomePage.vue"
          );
        },
      },
      {
        path: "/lessons/:id",
        name: "lessons",
        meta: { isHidden: true },
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/Lessons/Lessonpage.vue"
          );
        },
        meta: { isHidden: true },
        children: [
          {
            path: "/lessons/:id/",
            name: "lesson-video",
            meta: { isHidden: true },
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/Lessons/components/VideoLessons.vue"
              );
            },
          },
          {
            path: "/lessons/:id/audio",
            name: "lesson-audio",
            meta: { isHidden: true },
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/Lessons/components/AudioLesson.vue"
              );
            },
          },
        ],
      },
      {
        path: "/lessons/show/:id/:typelesson/:lesson_id",
        name: "lesson-show",
        meta: { isHidden: true },
        component: function () {
          return import(
            /* webpackChunkName: "about" */ "../views/Lessons/ShowLesson.vue"
          );
        },
        children:[
          {
            path: "/lessons/show/:id/:typelesson/:lesson_id/",
            name: "lessons-comment",
            meta: { isHidden: true,
            index:0, },
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/Lessons/components/CommentUser.vue"
              );
            },
          },
          {
            path: "/lessons/show/:id/:typelesson/:lesson_id/test",
            name: "lessons-test",
            meta: { isHidden: true,
            index:1, },
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/Lessons/components/TestComponent.vue"
              );
            },
          },
          {
            path: "/lessons/show/:id/:typelesson/:lesson_id/files",
            name: "lessons-files",
            meta: { isHidden: true,
            index:2, },
            component: function () {
              return import(
                /* webpackChunkName: "about" */ "../views/Lessons/components/AudioComponent.vue"
              );
            },
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../views/Login/LoginPage.vue"
      );
    },
  },
  {
    path: "/register",
    name: "register",

    component: function () {
      return import(
        /* webpackChunkName: "about" */ "../views/Register/RegisterPage.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
