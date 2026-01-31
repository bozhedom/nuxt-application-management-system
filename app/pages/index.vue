<template>
  <div class="container" :class="$style.container">
    <h1>Заявки</h1>
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
          <td>
            <UiStatusBadge
              :status="getStatus(application.id)"
              :title="getStatusLabel(getStatus(application.id))"
            />
          </td>
          <td>{{ application.verificationResult }}</td>
          <td>{{ application.createdAt }}</td>
          <td>
            <ApplicationsActions
              :id="application.id"
              :is-ready="readySet.has(application.id)"
              @send="send"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   layout: 'nav-menu',
// });

const { applications } = await useApplications();
const { readySet, send } = useApplicationActions(applications);
// const {get} = useLocalStorage()

// if (applications.value && applications.value[1]) {
//   if (get(`application-${applications.value[1].id}`, null)) {
//     applications.value[1].status = 'draft';
//   } else {
//     applications.value[1].status = 'completed';
//   }
// }

const { getStatus } = useApplicationStatus(applications);
console.log(getStatus(1));
console.log(getStatus(2));
console.log(getStatus(3));


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
