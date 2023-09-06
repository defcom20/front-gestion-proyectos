<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Arquitectura Hexagonal</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Tipo Estados',
    caption: 'Type Status',
    icon: 'widgets', // Icono para Tipo Estados
    link: '/proyect'
  },
  {
    title: 'Categorias',
    caption: 'Category',
    icon: 'category', // Icono para Categorías
    link: '/proyect'
  },
  {
    title: 'Prioridad',
    caption: 'Priority',
    icon: 'priority_high', // Icono para Prioridad
    link: '/proyect'
  },
  {
    title: 'Roles',
    caption: 'Role',
    icon: 'assignment_ind', // Icono para Roles
    link: '/proyect'
  },
  {
    title: 'Tareas',
    caption: 'Tasks',
    icon: 'task', // Icono para Tareas
    link: '/proyect'
  },
  {
    title: 'Proyectos',
    caption: 'Project',
    icon: 'work', // Icono para Proyectos
    link: '/proyect'
  },
  {
    title: 'Miembros',
    caption: 'Member',
    icon: 'group', // Icono para Miembros
    link: '/proyect'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
