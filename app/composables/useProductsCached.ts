export const useProductsCached = async (
  id: Ref<number | null>,
  products: Ref<IProduct[]>,
  loadFromServer: () => Promise<void>,
) => {
  const { get, set } = useLocalStorage();

  const load = async () => {
    if (!id.value) return;

    const key = `application-${id.value}`;

    const cached = get(key, null);
    if (cached) {
      products.value = cached;
      return;
    }

    await loadFromServer();
    set(key, products.value);

    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return { load };
};
