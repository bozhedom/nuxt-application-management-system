<template>
  <div :class="$style.inputWrapper">
    <input
      ref="inputRef"
      :placeholder="placeholder"
      :value="internalValue"
      :class="[$style.input, error && $style.inputError]"
      @input="onInput"
      @keydown="handleKeydown"
    />
    <button
      v-if="showClearButton"
      type="button"
      :class="$style.clearButton"
      @click="onClear"
    >
      <img src="~/assets/icons/close.svg" alt="closeIcon" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { IInputProps } from './types';

const { error, placeholder, value } = defineProps<IInputProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'clear'): void;
}>();

const internalValue = ref(value ?? '');
const inputRef = ref<HTMLInputElement | null>(null);

const showClearButton = computed(() => {
  return internalValue.value.length > 0;
});

const { handleInput, handleKeydown, clear } = useActionsInput(internalValue);

const onInput = (event: Event) => {
  const value = handleInput(event);
  emit('update:modelValue', value);
};

const onClear = () => {
  clear();
  emit('update:modelValue', '');
  emit('clear');

  nextTick(() => {
    inputRef.value?.focus();
  });
};
</script>

<style module lang="scss">
.inputError {
  border: 2px solid red !important;

  &:focus {
    outline: none !important;
  }
}

.input {
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 8px 8px 8px 12px;
  width: 100%;
}

.input:focus {
  outline: 2px solid #847f7f;
}

.inputWrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.clearButton {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #999;
  transition: all 0.2s;
  padding: 0;

  &:hover {
    background-color: rgba(202, 87, 87, 0.05);
  }
}

.clearIcon {
  pointer-events: none;
}
</style>
