import Layout from '../layouts/MainLayout.vue';
const index = () => import('../modules/ProjectManagement/Presentation/pages/Index.vue');

export default {
  path: '/proyect',
  component: index,
};

// export default {
//   path: '/proyect',
//   component: () => Layout,
//   children: [
//     { path: '', component: index }
//   ]
// }
