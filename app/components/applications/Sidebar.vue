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
      <ul :class="$style.ul">
        <li :class="$style.item">
          <Button
            :class="
              collapsed ? $style['button-nav'] : $style['button-nav-expanded']
            "
            hierarchy="secondary"
            size="small"
            title=""
          >
            <img src="~/assets/icons/icon.svg" alt="menu" />

            <span :class="[$style.label, collapsed && $style.hidden]">
              Заявки
            </span>
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
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  transition: all 0.55s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.collapsed {
  width: 68px;
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

  opacity: 1;
  transform: translateX(0);
  transition: all 0.35s ease;
}

.hidden {
  opacity: 0;
  transform: translateX(-12px);
  pointer-events: none;
}

.button {
  margin: 16px;
  margin-left: auto;
}

.button-nav {
  background-color: #fff7dab2;
  display: flex;
  gap: 15px;
  &:not(:disabled):hover {
    background-color: #ffefc2;
  }
}

.button-nav-expanded {
  background-color: white;
  display: flex;
  gap: 15px;

  &:not(:disabled):hover {
    background-color: #ffefc2;
  }
}

.ul .item {
  margin: 14px;
  list-style: none;
}

.ul {
  border-left: 2px solid #fc8507;
}
</style>
