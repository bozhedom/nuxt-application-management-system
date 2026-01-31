<template>
  <div :class="$style.container">
    <h1 :class="$style['main-header']">Заявки</h1>
    <div :class="$style['table-container']">
      <ApplicationsTable
        :applications="applications"
        :ready-applications="readySet"
        @send="send"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'nav-menu',
});

const { applications } = await useApplications();
const { readySet, send } = useApplicationActions(applications);
</script>

<style lang="scss" module>
.container {
  background-color: white;
  border-radius: 16px;
  height: 100%;
}
.table-container {
  padding: 24px;
}
.main-header {
  color: #333333;
  font-size: 24px;
  font-weight: 700;
  padding: 19px 0 19px 24px;
  border-bottom: 1px solid #eeeeee;
}
</style>
