import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useDropdown<T>(initialValue: T | null = null) {
  const value = ref<T | null>(initialValue);
  const isOpen = ref(false);
  const wrapperRef = ref<HTMLElement | null>(null);

  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  };

  const selectOption = (option: T) => {
    value.value = option;
    isOpen.value = false;
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!wrapperRef.value?.contains(e.target as Node)) {
      isOpen.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    value,
    isOpen,
    wrapperRef,
    toggleOpen,
    selectOption,
  };
}
