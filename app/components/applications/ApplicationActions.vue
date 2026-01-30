<template>
  <div class="actions">
    <NuxtLink :to="`/edit?id=${id}`">
      <button>Редактировать</button>
    </NuxtLink>

    <button @click="$emit('send')">отправить</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number;
  isReady: boolean;
}>();

defineEmits(['send']);
</script>
