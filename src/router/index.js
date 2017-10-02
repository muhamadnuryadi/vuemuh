import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Pages from '@/components/Pages';
import Editme from '@/components/Editme';
import Orderform from '@/components/Orderform';
import Search from '@/components/Search';
import News from '@/components/News';
import Paging from '@/components/Paging';

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
    {
      path: '/Search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/News',
      name: 'News',
      component: News,
    },
    {
      path: '/Paging',
      name: 'Paging',
      component: Paging,
    },
  ],
});
