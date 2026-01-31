import type { Ref } from 'vue';

export const useSaveApplication = async (
  id: Ref<number | null>,
  products: Ref<IProduct[]>,
) => {
  const router = useRouter();
  const { set } = useLocalStorage();
  const error = ref<Error | null>(null);

  const save = async () => {
    if (!id.value) return;
    error.value = null;

    const key = `application-${id.value}`;
    set(key, products.value);

    router.push('/');
  };

  return { save, error };
};
