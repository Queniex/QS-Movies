import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieGenreView from '../views/MovieGenreView.vue'
import MovieSearchView from '../views/MovieSearchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/genre',
    name: 'movie-genre',
    component: MovieGenreView
  },
  {
    path: '/search',
    name: 'movie-search',
    component: MovieSearchView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
