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
const filteredOptions = ref(props.options);
const emit = defineEmits(['update:modelValue', 'keyup.enter']);

watch(innerModel, (newValue) => {
  emit('update:modelValue', newValue);
});

const onEnter = (event) => {
  emit('keyup.enter', event);
};

const filterFn = (val, update) => {
  if (val === '') {
    update(() => {
      filteredOptions.value = props.options;
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    filteredOptions.value = props.options.filter(v => v[props.optionLabel].toLowerCase().indexOf(needle) > -1);
  });
};
</script>
<template>
  <q-select
    :id="id"
    :label="label"
    :option-label="optionLabel"
    :option-value="optionValue"
    :options="filteredOptions"
    v-model="innerModel"
    :error="error"
    :error-message="errorMessage"
    :disable="disabled"
    use-input
    input-debounce="0"
    @keyup.enter="onEnter"
    emit-value
    map-options
    @filter="filterFn"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
