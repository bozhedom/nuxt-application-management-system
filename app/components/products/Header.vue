<template>
  <header :class="$style['container-header']">
    <NuxtLink to="/">
      <img
        :class="$style.back"
        src="~/assets/icons/back-arrow.svg"
        alt="toggle"
    /></NuxtLink>

    <h1 :class="$style['main-header']">Товары</h1>
  </header>
</template>

<script lang="ts" setup>
</script>

<style module lang="scss">
.main-header {
  color: #333333;
  font-size: 24px;
  font-weight: 700;
}

.save-button {
  margin-left: auto;
}

.container-header {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 19px 24px;
  border-bottom: 1px solid #eeeeee;
}

.back {
  vertical-align: middle;
}

.back:hover {
  border-radius: 8px;
  background-color: #f8f2f2;
  transition: all 0.5s ease;
}
</style>
