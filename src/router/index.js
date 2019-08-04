import Vue from 'vue'
import Router from 'vue-router'

import top from '@/components/Top'
import silhouette from '@/components/Silhouette'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/silhouette',
      name: 'silhouette',
      component: silhouette
    }
  ]
})