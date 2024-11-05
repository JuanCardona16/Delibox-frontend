import { getLocalStorage } from '@/helpers';
import { useCallback, useEffect, useState } from 'react'

export const useLocalStorageListener = (key: string): string | null => {
  const [storageValue, setStorageValue] = useState<string | null>(() => {
    return getLocalStorage(key)
  });

  const handleStorageChange = useCallback(() => {
    const newValue = getLocalStorage(key)
    setStorageValue(newValue)
  }, [key])

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    const interval = setInterval(() => {
      const currentValue = getLocalStorage(key)

      if (currentValue !== storageValue) {
        setStorageValue(currentValue)
      }

    }, 100)

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval)
    };
  }, [key, storageValue, handleStorageChange]);

  return storageValue || null;

}