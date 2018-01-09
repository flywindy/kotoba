import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CardListView from '@/components/CardListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CardListView',
      component: CardListView
    }
  ]
})
