import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'

import Layout from 'layouts/MainLayout.vue';
import proyectRoutes from '../routes/proyectRoutes';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

    const routes = [
      {
        path: '/',
        component: Layout,
        children: [proyectRoutes],
      },
      {
        path: '/:catchAll(.*)',
        component: () => import('pages/Error404.vue'),
      },
    ];

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // const routeFiles = import.meta.glob('../routes/*.js');

  // Object.keys(routeFiles).forEach(async (filePath) => {
  //   const childRoutes = (await routeFiles[filePath]()).default;
  //   Router.addRoute({
  //     path: '/',
  //     component: Layout,
  //     children: [childRoutes],
  //   });
  // });

  // Object.keys(routeFiles).forEach(async (filePath) => {
  //   const childRoutes = (await routeFiles[filePath]()).default || routeFiles[filePath];
  //   Router.addRoute('Layout', childRoutes);
  // });

  return Router
})
