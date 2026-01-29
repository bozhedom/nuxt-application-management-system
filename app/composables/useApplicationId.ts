export const useApplicationId = () => {
  const route = useRoute();

  const id: Ref<number | null> = computed(() => {
    const value = route.query.id;
    return value ? Number(value) : null;
  });

  return id;
};
