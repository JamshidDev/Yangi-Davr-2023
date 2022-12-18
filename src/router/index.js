import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../Layouts/LayoutPage.vue'),
    redirect:"/home",
    children:[
      {
        path: '/home',
        name: 'home',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/Home/HomePage.vue')
        }
      },
      {
        path: '/lessons/:id',
        name: 'lessons',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/Lessons/Lessonpage.vue')
        },
        children:[
          {
            path: '/lessons/:id/',
            name: 'lesson-video',
            component: function () {
              return import(/* webpackChunkName: "about" */ '../views/Lessons/components/VideoLessons.vue')
            }
          },
          {
            path: '/lessons/:id/audio',
            name: 'lesson-audio',
            component: function () {
              return import(/* webpackChunkName: "about" */ '../views/Lessons/components/AudioLesson.vue')
            }
          },
        ]

      },
      {
        path: '/lessons/show/:id/:typelesson/:lesson_id',
        name: 'lesson-show',
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/Lessons/ShowLesson.vue')
        }
      },
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login/LoginPage.vue')
    }
  },
  {
    path: '/register',
    name: 'register',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Register/RegisterPage.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
