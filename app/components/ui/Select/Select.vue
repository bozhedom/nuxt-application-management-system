<template>
  <div :class="$style.wrapper" ref="wrapperRef">
    <div
      :value="internalValue"
      :class="[$style.select, error && $style.error, isOpen && $style.focus]"
      @focus="isOpen = true"
      @click="toggleOpen"
    >
      <span class="selected">{{ internalValue || placeholder }}</span>
      <img
        :class="[$style.chevronDown, isOpen ? $style.rotate : '']"
        src="~/assets/icons/chevron-down.svg"
        alt="chevron"
      />
    </div>
    <ul :class="[$style.options, isOpen ? $style.show : '']">
      <li
        v-for="option in options"
        :key="option"
        :class="[
          $style.option,
          internalValue === option && $style.selectOption,
        ]"
        @click="handleSelect(option)"
      >
        {{ option }}

        <img
          v-if="internalValue === option"
          src="~/assets/icons/check.svg"
          alt="check"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ISelectProps } from './types';
import { useDropdown } from '~/composables/useDropdown';

const props = withDefaults(defineProps<ISelectProps>(), {
  placeholder: 'Выберите',
  error: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const {
  value: internalValue,
  isOpen,
  wrapperRef,
  toggleOpen,
  selectOption,
} = useDropdown<string>(props.modelValue ?? '');

const handleSelect = (option: string) => {
  selectOption(option);
  emit('update:modelValue', option);
};

watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue ?? '';
  },
);
</script>

<style module lang="scss">
.wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.select {
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #fff;
  font-size: 14px;
  width: 100%;
}

.focus {
  outline: 2px solid #847f7f;
}

.chevronDown {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%) rotate(0deg);
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
  pointer-events: none;
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 50%;
  max-height: 26 0px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #d9d9d9;
  padding: 8px;
  border-radius: 12px;
  margin-top: 8px;
  z-index: 10;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
 
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  pointer-events: none; 
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.options.show {
  transform: scaleY(1);
  opacity: 1;
  pointer-events: auto;
}

.option {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #333333;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: #fc8507;
  }
}

.selectOption {
  color: #fc8507;
}

.rotate {
  transform: translateY(-50%) rotate(180deg);
}

.inputError {
  border: 2px solid red !important;

  &:focus {
    outline: none !important;
  }
}
</style>
