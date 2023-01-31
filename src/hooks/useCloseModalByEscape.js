import { useEffect } from 'react';

export default function useCloseModalByEscape(
  setModalIsOpen,
  setStockAvailable
) {
  useEffect(() => {
    const closeOnEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setStockAvailable([]);
        setModalIsOpen(false);
      }
    };
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, []);
}
