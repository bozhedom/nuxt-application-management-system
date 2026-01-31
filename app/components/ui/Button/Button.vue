<template>
  <button
    :class="$style.button + ' ' + $style[hierarchy] + ' ' + $style[size]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
import type { IButtonProps } from './types';

const { title, hierarchy, disabled, onClick, size } =
  defineProps<IButtonProps>();
</script>

<style module lang="scss">
.button {
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #f2f2f2;
    color: #afafaf;
    cursor: not-allowed;
  }
}

.small {
  width: 114px;
  height: 36px;
}

.medium {
  width: 140px;
}

.primary {
  background-color: #fc8507;
  color: #ffffff;
  font-weight: 700;

  &:not(:disabled):hover {
    background-color: #ffa218;
  }
}

.tertiary {
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  color: #333333;
  &:not(:disabled):hover {
    background-color: #f5f5f5;
  }
}

.secondary {
  background-color: #f7f7f7;
  color: #a7a5a5;
  padding: 0;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  padding: 8px;
  &:not(:disabled):hover {
    background-color: #eeebeb;
  }
}
</style>
