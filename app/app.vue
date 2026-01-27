<template>
  <div>
    <h1>1213</h1>
    {{ data.message }}

    <NuxtPage />
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/example')
</script>
<style lang='scss' scoped></style>