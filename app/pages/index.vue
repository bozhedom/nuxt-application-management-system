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
        <tr v-for="application in applications" :key="application.id">
          <td>{{ application.id }}</td>
          <td>{{ application.number }}</td>
          <td>{{ application.status }}</td>
          <td>{{ application.verificationResult }}</td>
          <td>{{ application.createdAt }}</td>
          <td>
            <NuxtLink :to="`/edit?id=${application.id}`">
              <button>Редактировать</button>
            </NuxtLink>

            <button
              v-if="readyApplications.has(application.id)"
              @click="send(application.id)"
            >
              Отправить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { applications } = await useApplications();
const { get } = useLocalStorage();
const storageVersion = ref(0);

const readyApplications = computed(() => {
  if (!import.meta.client) return new Set<number>();
  storageVersion.value;
  const set = new Set<number>();

  for (const app of applications.value) {
    if (get(`application-${app.id}`, null)) {
      set.add(app.id);
    }
  }

  return set;
});

const { send } = await useSendApplication(() => {
  storageVersion.value++;
});
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
