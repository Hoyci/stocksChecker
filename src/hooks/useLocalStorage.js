import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      console.log('macetei', valueToStore);
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        console.log('cheguei aqui1');
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        console.log('cheguei aqui2');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
