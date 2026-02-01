<template>
  <div :class="$style.container">
    <h1 :class="$style['main-header']">Заявки</h1>
    <div :class="$style['table-container']">
      <ApplicationsTable />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'nav-menu',
});
</script>

<style lang="scss" module>
.container {
  background-color: white;
  border-radius: 16px;
  flex: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
