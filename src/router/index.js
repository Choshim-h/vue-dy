import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Learn from '../views/Learn.vue'
import Student from '../views/Student.vue'
import About from '../views/About.vue'
import Community from '../views/Community.vue'

import Academic from '@/components/community/Academic.vue'
import Download from '../components/community/Download.vue'
import Personal from '../components/community/Personal.vue'

import Question from '@/components/Question'
import Err from '@/components/Err'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learn
  },
  {
    path: '/student',
    name: 'student',
    component: Student
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/community',
    name: 'community',
    component: Community,
    redirect: '/community/academic',
    children: [
      {
        path: '/community/academic',
        name: 'academic',
        component: Academic
      },
      {
        path: '/community/download',
        name: 'download',
        component: Download
      },
      {
        path: '/community/personal',
        name: 'personal',
        component: Personal
      }
    ]
  },
  {
    path: '/question/:id',
    name: 'question',
    component: Question
  },
  {
    path: '/err.html',
    name: 'err',
    component: Err
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact'
})

export default router
