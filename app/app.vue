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
  background-color: #F7F7F7;
  min-height: 100vh;
  // padding-top: 1px;
}
</style>
