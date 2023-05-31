import Vue from 'vue';
import Router from 'vue-router';
import { beforeHook } from '@/router/hooks';
import Dashboard from '../pages/Dashboard/index.vue';

Vue.use(Router);

const Horses = () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard/horses/index.vue');
const HorsesList = () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard/horses/list.vue');
const HorsesView = () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard/horses/view.vue');

const PageNotFound = () => import('../pages/Errors/404.vue');
const IssueOccurred = () => import('../pages/Errors/Issue.vue');

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '',
          redirect: 'horses'
        },
        {
          path: 'horses',
          component: Horses,
          children: [
            {
              path: '',
              name: 'horses',
              component: HorsesList
            },
            {
              path: 'view/:id',
              name: 'horses.view',
              component: HorsesView
            }
          ]
        }
      ]
    },
    {
      path: '/issue',
      name: 'issue-occurred',
      component: IssueOccurred
    },
    {
      path: '/404',
      name: 'not-found',
      component: PageNotFound
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach(beforeHook);

export default router;
