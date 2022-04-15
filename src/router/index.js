import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Main'
import First from '@/components/First'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'First',
      component: First
    }
  ]
})
