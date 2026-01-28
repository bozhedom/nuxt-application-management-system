<template>
  <div :class="$style.container">
    <h1>Список заявок</h1>
    <table :class="$style.table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Статус</th>
          <th>Результат</th>
          <th>Дата</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.number }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.verificationResult }}</td>
          <td>{{ order.createdAt }}</td>
          <td>
            <NuxtLink :to="`/edit?id=${order.id}`">
              <button>Редактировать</button>
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { IApplication } from '~/types/api';

const { data: orders } = await useFetch<IApplication[]>('/api/table-data');
</script>

<style lang="scss" module>
.container {
  padding: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
}
</style>
