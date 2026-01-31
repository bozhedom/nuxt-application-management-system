export const useLocalStorage = () => {
  const get = <T>(key: string, defaultValue: T): T => {
    if (!import.meta.client) return defaultValue;

    const item = localStorage.getItem(key);
    if (!item) return defaultValue;

    try {
      return JSON.parse(item) as T;
    } catch {
      return defaultValue;
    }
  };

  const set = (key: string, value: object | boolean) => {
    if (!import.meta.client) return;

    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (key: string) => {
    if (!import.meta.client) return;

    localStorage.removeItem(key);
  };

  return {
    get,
    set,
    remove,
  };
};
