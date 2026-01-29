import type { IProduct } from '~/types/api';

export const useProducts = async (id: Ref<number | null>) => {
  const products = ref<IProduct[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const load = async () => {
    if (!id.value) return;

    loading.value = true;
    error.value = null;

    const { data, error: fetchError } = await useFetch<IProduct[]>(
      '/api/products',
      { query: { id: id.value } },
    );

    if (fetchError.value) {
      error.value = fetchError.value;
      loading.value = false;
      return;
    }

    products.value = data.value || [];
    loading.value = false;
  };

  return { products, load, loading, error };
};
