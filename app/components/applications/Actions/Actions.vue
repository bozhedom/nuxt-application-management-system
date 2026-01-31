<template>
  <div :class="$style.actions">
    <NuxtLink :to="`/edit?id=${id}`" v-if="!isReady">
      <Button title="Редактировать" hierarchy="tertiary" size="small" />
    </NuxtLink>

    <Button
      v-if="isReady"
      @click="onSend"
      title="Отправить"
      hierarchy="primary"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button/Button.vue';
import type { IActionsProps } from './types';

const { id, isReady } = defineProps<IActionsProps>();

const emit = defineEmits<{
  (e: 'send', id: number): void;
}>();

const onSend = () => {
  emit('send', id);
};
</script>

<style lang="scss" module>
.actions {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
</style>
