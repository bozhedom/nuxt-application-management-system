import type { Ref } from 'vue';

export function useSelectActions<T extends string | number>(
  internalValue: Ref<T | ''>,
) {
  const handleChange = (event: Event): T | '' => {
    const value = (event.target as HTMLSelectElement).value as T | '';
    internalValue.value = value;
    return value;
  };

  const clear = () => {
    internalValue.value = '';
  };

  return {
    handleChange,
    clear,
  };
}
