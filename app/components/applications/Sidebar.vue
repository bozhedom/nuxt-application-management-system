<template>
  <aside :class="[$style.sidebar, collapsed && $style.collapsed]">
    <Button
      :class="$style.button"
      hierarchy="secondary"
      size="small"
      @click="toggle"
    >
      <img
        :class="[$style.chevron, !collapsed && $style.rotated]"
        src="~/assets/icons/chevron-right.svg"
        alt="toggle"
      />
    </Button>

    <nav>
      <ul>
        <li>
          <Button
            :class="
              collapsed ? $style['button-nav'] : $style['button-nav-expanded']
            "
            hierarchy="secondary"
            size="small"
            title=""
          >
            <img src="~/assets/icons/icon.svg" alt="menu" />

            <span v-if="!collapsed" :class="[$style.label]"> Заявки </span>
          </Button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../ui/Button/Button.vue';

const collapsed = ref(true);

const toggle = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style module lang="scss" scoped>
.sidebar {
  width: 280px;
  background: white;
  transition: width 0.2s ease;
  border-radius: 16px;
  margin: 24px 12px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  transition:
    width 0.55s ease,
    transform 0.55s ease;
}

.collapsed {
  width: 68px;
  transform: translateX(-4px);
}

.chevron {
  transition: transform 0.35s ease;
}

.rotated {
  transform: rotate(180deg);
}

.toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 16px;
}

.label {
  font-size: 16px;
  font-weight: 400;
  color: #fc8507;
}

.button {
  margin: 16px;
  margin-left: auto;
}

.button-nav {
  background-color: #fff7dab2;

  &:not(:disabled):hover {
    background-color: #ffefc2;
  }
}

.button-nav-expanded {
  background-color: white;
  display: flex;
  gap: 12px;

  &:not(:disabled):hover {
    background-color: #ffefc2;
  }
}

ul li {
  margin: 14px;
  list-style: none;
}

ul {
  border-left: 2px solid #fc8507;
}
</style>
