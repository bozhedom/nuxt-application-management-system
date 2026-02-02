<template>
  <Table>
    <template #header>
      <tr>
        <th>Номер</th>
        <th>Статус</th>
        <th>Результат</th>
        <th>Дата</th>
        <th>Действие</th>
      </tr>
    </template>

    <template #default>
      <tr
        :class="readySet.has(application.id) ? $style.ready : ''"
        v-for="application in applications"
      >
        <td>{{ application.number }}</td>
        <td>
          <UiStatusBadge
            :status="getStatus(application.id)"
            :title="getStatusLabel(getStatus(application.id))"
          />
        </td>
        <td>{{ getResultLabel(application.verificationResult) }}</td>
        <td>{{ application.createdAt }}</td>
        <td>
          <ApplicationsActions
            :id="application.id"
            :is-ready="readySet.has(application.id)"
            @send="send"
          />
        </td>
      </tr>
    </template>
  </Table>
</template>

<script setup lang="ts">
import Table from '~/components/BaseTable/Table.vue';

const { applications } = await useApplications();
const { readySet, send } = useApplicationActions(applications);
const { getStatus } = useApplicationStatus(applications);

defineEmits<{
  (e: 'send', id: number): void;
}>();
</script>

<style module lang="scss">
.ready {
  background-color: #fff7dab2;
}
</style>
