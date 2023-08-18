<script>
import { ref } from 'vue'

</script>
<template>
  <div class="q-pa-md">
    <q-markup-table separator="cell" flat bordered>
      <thead>
        <tr>
          <th colspan="6">
            <div class="row no-wrap items-center justify-between            ">
              <div class="text-h4 q-ml-md text-blue-4">Listado de proyectos</div>
              <q-btn color="primary" icon="add" label="Nuevo proyecto" />
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
        <tr>
          <td class="text-left">1</td>
          <td class="text-center">159</td>
          <td class="text-center">6</td>
          <td class="text-center">24</td>
          <td class="text-center">
            <q-btn push color="grey-4 q-mr-md " text-color="blue-10" unelevated icon="mdi-clipboard-check" label="Tareas"
            @click="$emit('assignTask', project.id)" />
          <q-btn push color="grey-4" text-color="purple" unelevated icon="mdi-clipboard-account-outline"
            label="Miembros" @click="$emit('assignMember', project.id)" />
          </td>
          <td class="text-center">
            <q-icon class="q-mr-md" name="edit" color="blue" size="sm"></q-icon>
            <q-icon name="mdi-trash-can" color="red" size="sm"></q-icon>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
