import type { IApplication } from '~/types/api';

export const useApplications = async () => {
  const applications = ref<IApplication[]>([]);
  const error = ref<Error | null>(null);
  const { data, error: fetchError } =
    await useFetch<IApplication[]>('/api/table-data');

  if (fetchError.value) {
    error.value = fetchError.value;
  }

  applications.value = data.value || [];

  return { applications, error };
};
