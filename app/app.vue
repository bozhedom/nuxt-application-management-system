<template>
  <div class="container" :class="$style.layout">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup></script>
<style lang="scss" module>
.layout {
  background-color: #f7f7f7;
  min-height: 100vh;
  padding: 24px 20px;
  display: flex;
  gap: 12px;
}
</style>
