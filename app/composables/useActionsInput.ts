import type { Ref } from 'vue';

export function useActionsInput(internalValue: Ref<string>) {
  const sanitizeValue = (raw: string): string => {
    let value = raw.replace(/,/g, '.').replace(/[^\d.]/g, '');

    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    }

    return value;
  };

  const handleInput = (event: Event): string => {
    const raw = (event.target as HTMLInputElement).value;
    const value = sanitizeValue(raw);
    internalValue.value = value;
    return value;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ];

    if (allowedKeys.includes(event.key)) return;
    if (/^\d$/.test(event.key)) return;
    if (event.key === '.' && !internalValue.value.includes('.')) return;

    event.preventDefault();
  };

  const clear = () => {
    internalValue.value = '';
  };

  return {
    handleInput,
    handleKeydown,
    clear,
  };
}
