<script setup>
  import { ref, watch } from 'vue';
  const props = defineProps({
    id: String,
    label: String,
    optionLabel: { type: String, default: 'name' },
    optionValue: { type: String, default: 'id' },
    options: Array,
    error: Boolean,
    errorMessage: String,
    disabled: Boolean,
    modelValue: [String, Number],
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
  <q-select
    :id="id"
    :label="label"
    :option-label="optionLabel"
    :option-value="optionValue"
    :options="options"
    v-model="innerModel"
    :error="error"
    :error-message="errorMessage"
    :disable="disabled"
    @keyup.enter="onEnter"
    emit-value
    map-options
  />
</template>
