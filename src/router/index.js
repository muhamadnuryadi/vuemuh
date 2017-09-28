import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Pages from '@/components/Pages';
import Editme from '@/components/Editme';
import Orderform from '@/components/Orderform';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/Pages',
      name: 'Pages',
      component: Pages,
    },
    {
      path: '/Editme',
      name: 'Editme',
      component: Editme,
    },
    {
      path: '/Orderform',
      name: 'Orderform',
      component: Orderform,
    },
  ],
});
