<template>
  <div :class="`${$style[status]} ${$style.badge}`">
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
import type { IStatusBadgeProps } from './types';

const { title, status } = defineProps<IStatusBadgeProps>();
</script>

<style module lang="scss">
.badge {
  width: fit-content;
  height: 24px;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 12px;
}

.active {
  background-color: #ebffed;
  color: #059669;
  width: 60px;
}

.completed {
  background-color: #e6f0ff;
  color: #3366ff;
}

.draft {
  background-color: #f4f4f4;
  color: #8c8c8c;
}

</style>
