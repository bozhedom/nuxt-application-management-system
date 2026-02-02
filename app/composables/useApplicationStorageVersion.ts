const storageVersion = ref(0);

export function useApplicationStorageVersion() {
  const bump = () => {
    storageVersion.value++;
  };

  return {
    storageVersion,
    bump,
  };
}
