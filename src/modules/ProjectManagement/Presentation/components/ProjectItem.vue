<script setup>

const props = defineProps({
  proyect: Object,
  index: Number,
});

const { name, description, type_state_id } = props.proyect;
const autoIncrement = props.index;

</script>

<template>
  <tr>
    <td class="text-left"> {{ autoIncrement + 1 }} </td>
    <td class="text-center">{{ name }}</td>
    <td class="text-center">{{ description }}</td>
    <td class="text-center">{{ type_state_id }}</td>
    <td class="text-center">
      <q-btn push color="grey-4 q-mr-md " text-color="blue-10" unelevated icon="mdi-clipboard-check" label="Tareas"
      @click="$emit('assignTask', item.id)" />
    <q-btn push color="grey-4" text-color="purple" unelevated icon="mdi-clipboard-account-outline"
      label="Miembros" @click="$emit('assignMember', item.id)" />
    </td>
    <td class="text-center">
      <q-icon class="q-mr-md" name="edit" color="blue" size="sm"></q-icon>
      <q-icon name="mdi-trash-can" color="red" size="sm"></q-icon>
    </td>
  </tr>
</template>
