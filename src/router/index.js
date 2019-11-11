import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Quiz from '../pages/quiz/Quiz'
import Results from '../pages/results/Results'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quiz/:category(\\d+)/:nbQuestion(\\d+)',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/results/:score(\\d+)/:nbQuestion(\\d+)',
      name: 'Results',
      component: Results
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
