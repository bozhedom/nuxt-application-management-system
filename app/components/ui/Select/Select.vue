<template>
  <div>
    <select :value="modelValue" @change="onChange" :class="error && 'error'">
      <option value="" disabled>Выберите</option>

      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type { ISelectProps } from './types';

const { error, modelValue, options } = defineProps<ISelectProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLSelectElement).value);
}
</script>
