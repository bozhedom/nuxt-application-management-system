<template>
  <div :class="$style.layout">
    <ApplicationsSidebar />
    <main :class="$style.content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.layout {
  display: flex;
  min-height: 100vh;
  height: 100%;
}

.content {
  flex: 1;
  margin: 24px 20px 24px 0;
}
</style>
