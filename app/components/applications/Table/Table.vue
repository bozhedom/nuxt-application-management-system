<template>
  <table :class="$style.table">
    <thead :class="$style.thead">
      <tr :class="$style['thead-tr']">
        <th>Номер</th>
        <th>Статус</th>
        <th>Результат</th>
        <th>Дата</th>
        <th>Действие</th>
      </tr>
    </thead>

    <tbody :class="$style.tbody">
      <Row
        v-for="application in applications"
        :key="application.id"
        :application="application"
        :is-ready="readyApplications.has(application.id)"
        @send="$emit('send', application.id)"
      />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import Row from './Row.vue';
import type { ITableProps } from './types';

const { applications, readyApplications } = defineProps<ITableProps>();

defineEmits<{
  (e: 'send', id: number): void;
}>();
</script>

<style module lang="scss">
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  overflow: hidden;
  table-layout: auto;
}

.thead {
  background-color: #f7f7f7;
  height: 48px;
}

.thead-tr th {
  text-align: left;
  padding: 15px 20px;
  font-weight: 600;
  border-bottom: 1px solid #eae8e8;
  font-weight: 700;
  font-size: 14px;
  color: #8c8c8c;
}

.tbody td {
  padding: 15px 20px;
  height: 64px;
  border-bottom: 1px solid #eae8e8;
}

.thead-tr th:nth-child(-n + 4),
.tbody td:nth-child(-n + 4) {
  width: 25%;
  min-width: 80px;
}

.thead-tr th:last-child,
.tbody td:last-child {
  width: 1%;
  white-space: nowrap;
}
</style>
