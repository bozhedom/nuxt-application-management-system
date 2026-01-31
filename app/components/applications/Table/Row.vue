<template>
  <tr :class="isReady ? $style.ready : ''">
    <td>{{ application.number }}</td>
    <td>
      <UiStatusBadge
        :status="application.status"
        :title="getStatusLabel(application.status)"
      />
    </td>
    <td>{{ getResultLabel(application.verificationResult) }}</td>
    <td>{{ application.createdAt }}</td>
    <td>
      <ApplicationsActions
        :id="application.id"
        :is-ready="isReady"
        @send="send"
      />
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { IRowProps } from './types';

const { application, isReady } = defineProps<IRowProps>();

const emit = defineEmits<{
  (e: 'send', id: number): void;
}>();

function send(id: number) {
  emit('send', id);
}

// const { getStatus } = useApplicationStatus(applications);

</script>

<style module lang="scss">
.ready {
  background-color: #fff7dab2;
}
</style> 