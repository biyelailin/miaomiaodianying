import Vue from 'vue'
import Router from 'vue-router'
import mine from './mine/index.js'
import movie from './movie/index.js'
import cinema from './cinema/index.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    mine,
    movie,
    cinema,
    {
      path:'/',
      redirect:'/movie'
    }
  ]
})
