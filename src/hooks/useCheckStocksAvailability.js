import { useEffect, useState } from 'react';

import { STOCKS } from '../api/stocks';

export function useCheckStocksAvailability(debouncedStockName) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchStock = async () => {
      const { data } = await STOCKS.get(
        `available?search=${debouncedStockName}`
      );
      setResult(data?.stocks.slice(0, 19));
    };
    fetchStock();
  }, [debouncedStockName]);
  return result;
}
