<script setup>
import { computed, ref } from 'vue'
import {projectComposable} from '../composables/projectComposable'
import ProjectItem from '../components/ProjectItem.vue';
import RegisterModal from '../components/RegisterModal.vue';

const  { createProjectUseCase, listProyect, listTypeStatus, handleRegister, openModal, vv, proyectManagement }  = projectComposable()

</script>
<template>
  <div class="q-pa-md">
    <q-markup-table separator="cell" flat bordered>
      <thead>
        <tr>
          <th colspan="6">
            <div class="row no-wrap items-center justify-between            ">
              <div class="text-h4 q-ml-md text-blue-4">Listado de proyectos</div>
              <q-btn color="primary" icon="add" label="Nuevo proyecto" @click="openModal = true" />
            </div>
          </th>
        </tr>
        <tr class="bg-grey-5">
          <th class="text-left">#</th>
          <th class="text-center">Name</th>
          <th class="text-center">Description</th>
          <th class="text-center">Status</th>
          <th class="text-center">Asignaciones</th>
          <th class="text-center">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(project, index) in listProyect" :key="index">
          <ProjectItem :proyect="project" :index="index" />
        </template>
      </tbody>
    </q-markup-table>
    <RegisterModal v-if="openModal" :OpenModal="openModal" :listTypeStatus="listTypeStatus" :vv="vv" @closeModal="openModal = false" @handleRegister="handleRegister" />
  </div>
</template>
