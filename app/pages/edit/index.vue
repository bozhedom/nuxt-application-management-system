<template>
  <div :class="$style.container">
    <ProductsHeader />
    
    <div :class="$style['table-container']">
      <ProductsTable />
    </div>
  
  </div>
</template>

<script setup lang="ts">

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
</style>
