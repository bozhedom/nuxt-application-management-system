<template>
  <aside :class="[$style.sidebar, collapsed && $style.collapsed]">
    <button :class="$style.toggle" @click="toggle">
      {{ collapsed ? '→' : '←' }}
    </button>

    <nav v-if="!collapsed">
      <ul>
        <li>
          <NuxtLink to="/">Заявки</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const collapsed = ref(false);

const toggle = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style module lang="scss" scoped>
.sidebar {
  width: 220px;
  background: #1f2937;
  color: white;
  padding: 16px;
  transition: width 0.2s ease;
}

.collapsed {
  width: 60px;
}

.toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 16px;
}

a {
  color: white;
  text-decoration: none;
}
</style>
