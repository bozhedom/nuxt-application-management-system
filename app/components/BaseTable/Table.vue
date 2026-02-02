<template>
  <table :class="$style.table">
    <thead :class="$style.thead">
      <slot name="header"/>
    </thead>
    <tbody :class="$style.tbody">
      <slot/>
    </tbody>
  </table>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  table-layout: auto;
}

.thead {
  background-color: #f7f7f7;
  height: 48px;
}

.thead th {
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

.thead th:nth-child(-n + 4),
.tbody td:nth-child(-n + 4) {
  width: 25%;
  min-width: 80px;
}

.thead th:last-child,
.tbody td:last-child {
  width: 1%;
  white-space: nowrap;
}
</style>
