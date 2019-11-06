import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Quiz from '../components/quiz/Quiz'
import Results from '../components/results/Results'

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
