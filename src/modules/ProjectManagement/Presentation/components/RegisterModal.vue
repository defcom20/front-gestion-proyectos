<script setup>
import { computed, reactive, ref, onMounted, nextTick, watchEffect  } from "vue";
import InputField from  '../../../../components/InputField.vue'
import SelectField from '../../../../components/SelectField.vue'
import SelectFieldFilter from "src/components/SelectFieldFilter.vue";

const props = defineProps({
  OpenModal: Boolean,
  listTypeStatus: Array,
  vv: Object,
});

const isSelectFieldOpen = ref(false);
const saveButtonRef = ref(null);

const modal = computed(() => props.OpenModal);
const listTypeStatus = computed(() => props.listTypeStatus);
const vv = computed(() => props.vv);

const focusButton = (event, isFromSelect = false) => {
  if (isFromSelect && isSelectFieldOpen.value) {
    isSelectFieldOpen.value = false;
    return;
  }
  const inputs = document.querySelectorAll('input[type="text"], input[type="password"],  textarea');
  const index = Array.from(inputs).indexOf(event.target);
  const nextInput = inputs[index + 1];
  if (nextInput) {
    nextInput.focus();
  }else if (saveButtonRef.value) { // Si no hay un siguiente input, pasa el foco al botón "Guardar"
    saveButtonRef.value.$el.focus();
  }
};

// watchEffect(() => {
//   if (modal.value) {
//     nextTick(() => {
//       if (submitButton.value) {
//         submitButton.value.focusInput(); // Llama al método expuesto
//       }
//     });
//   }
// });
</script>
<template>
  <q-dialog v-model="modal" persistent transition-show="scale" transition-hide="scale" position="top">
    <q-card style="width: 700px; max-width: 80vw; margin-top: 20px;">
      <q-card-section class="bg-grey-10">
        <div class="text-h6 text-white">Registrar nuevo proyecto</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-pa-lg">
        <div class="row q-col-gutter-md">
          <div class="col-6">
            <InputField
              id="nombre"
              type="text"
              label="Nombe Proyecto"
              outlined
              stack-label
              v-model="vv.nombre.$model"
              :error="vv.nombre.$error"
              :errorMessage="vv.nombre.$errors[0] && vv.nombre.$errors[0].$message"
              :showError="vv.nombre.$error"
              @keyup.enter="focusButton($event)"
              :focus="true" />
          </div>
          <div class="col-6">
            <SelectFieldFilter
              id="tipoEstado"
              type="text"
              label="Selecciona una opción"
              outlined
              stack-label
              v-model="vv.tipoEstado.$model"
              :options="listTypeStatus"
              :error="vv.tipoEstado.$error"
              :errorMessage="vv.tipoEstado.$errors[0] && vv.tipoEstado.$errors[0].$message"
              :showError="vv.tipoEstado.$error"
              @keyup.enter="focusButton($event, true)"
            />
            <!-- <SelectField
              id="tipoEstado"
              type="text"
              label="Selecciona una opción"
              outlined
              stack-label
              v-model="vv.tipoEstado.$model"
              :options="listTypeStatus"
              :error="vv.tipoEstado.$error"
              :errorMessage="vv.tipoEstado.$errors[0] && vv.tipoEstado.$errors[0].$message"
              :showError="vv.tipoEstado.$error"
              @keyup.enter="focusButton($event)"
            /> -->
          </div>
          <div class="col-12">
            <InputField
              id="descripcion"
              type="textarea"
              label="Nombe Proyecto"
              outlined
              stack-label
              v-model="vv.descripcion.$model"
              :error="vv.descripcion.$error"
              :errorMessage="vv.descripcion.$errors[0] && vv.descripcion.$errors[0].$message"
              :showError="vv.descripcion.$error"
              @keyup.enter="focusButton($event)"
              />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat color="red" label="Salir" @click="$emit('closeModal', false)" />
        <q-btn ref="saveButtonRef" push label="Guardar" class="bg-grey-10 text-white" @click="$emit('handleRegister')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>


