export function useApplicationStorageVersion() {
  const storageVersion = ref(0);

  const bump = () => {
    storageVersion.value++;
  };

  return {
    storageVersion,
    bump,
  };
}
