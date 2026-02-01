<template>

  <ApplicationsSidebar />
  <!-- <main :class="$style.content">
      <slot />
    </main> -->
  <slot />
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.layout {
  display: flex;
  min-height: 100vh;
  height: 100%;
  gap: 12px;
}

.content {
  flex: 1;
  margin: 24px 20px 24px 0;
}
</style>
