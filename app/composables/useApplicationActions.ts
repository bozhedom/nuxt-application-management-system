import type { Ref } from 'vue';

export function useApplicationActions(applications: Ref<{ id: number }[]>) {
  const { get, remove } = useLocalStorage();
  const error = ref<Error | null>(null);
  const { bump, storageVersion } = useApplicationStorageVersion();

  const readySet = computed(() => {
    if (!import.meta.client) return new Set<number>();
    storageVersion.value;

    const set = new Set<number>();
    for (const app of applications.value) {
      if (get(`application-${app.id}`, null)) {
        set.add(app.id);
      }
    }
    return set;
  });

  const send = async (id: number) => {
    try {
      const products = get(`application-${id}`, null);

      const result = await $fetch<{ success: boolean }>('/api/send', {
        method: 'POST',
        body: { id, products },
      });

      if (!result.success) {
        throw new Error('Send failed');
      }

      remove(`application-${id}`);
      bump();
      storageVersion.value++;
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e));
    }
  };

  return {
    readySet,
    send,
    error,
  };
}
