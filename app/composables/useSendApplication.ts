export const useSendApplication = async (onSuccess?: () => void) => {
  const error = ref<Error | null>(null);
  const { get, remove } = useLocalStorage();

  const send = async (id: number) => {
    let products = get(`application-${id}`, null);

    try {
      const result = await $fetch<{ success: boolean }>('/api/send', {
        method: 'POST',
        body: {
          id: id,
          products: products,
        },
      });
      if (result.success) {
        remove(`application-${id}`);
        onSuccess?.();
      } else {
        throw new Error('Failed to send application');
      }
    } catch (e) {
      console.error('Error sending application:', e);
      error.value = e instanceof Error ? e : new Error(String(e));
    }
  };

  return { send, error };
};
