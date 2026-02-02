export function useApplicationStatus(applications: Ref<IApplication[]>) {
  const { get } = useLocalStorage();

  const { storageVersion } = useApplicationStorageVersion();

  const statusMap = computed(() => {
    if (!import.meta.client) return new Map<number, StatusOption>();

    storageVersion.value;
    const map = new Map<number, StatusOption>();

    for (const app of applications.value) {
      const hasDraft = Boolean(get(`application-${app.id}`, null));

      if (hasDraft) {
        map.set(app.id, 'draft');
      } else {
        map.set(app.id, app.status);
      }
    }
    console.log(map);

    return map;
  });

  return {
    getStatus: (id: number): StatusOption =>
      statusMap.value.get(id) ?? 'active',
  };
}
