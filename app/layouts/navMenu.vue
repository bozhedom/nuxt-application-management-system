<template>
  <div :class="$style.layout">
    <ApplicationsSidebar />
    <main :class="$style.content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style module lang="scss">
.layout {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 24px;
}
</style>
