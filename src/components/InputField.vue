<script setup>
import { ref, defineEmits, watch } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  type: String,
  placeholder: String,
  error: Boolean,
  errorMessage: String,
  showError: Boolean,
  focus: Boolean,
  disabled: Boolean,
  modelValue: String,
});

const innerModel = ref(props.modelValue);
const emit = defineEmits(['update:modelValue', 'keyup.enter']);

watch(innerModel, (newValue) => {
  emit('update:modelValue', newValue);
});

const onEnter = (event) => {
  emit('keyup.enter', event);
};
</script>
<template>
  <q-input
    :id="id"
    :type="type"
    :label="label"
    :placeholder="placeholder"
    v-model="innerModel"
    :error="error"
    :error-message="errorMessage"
    :disable="disabled"
    @keyup.enter="onEnter"
    :autofocus="focus"
  />
    <!-- <template v-slot:prepend>
      <q-icon name="account_circle" />
    </template>
  </q-input> -->
</template>
