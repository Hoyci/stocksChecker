import { useEffect } from 'react';

import { STOCKS } from '../api/stocks';

export default function useCheckStocksAvailability(
  stockName,
  setStocksAvailable
) {
  useEffect(() => {
    const fetchStock = async () => {
      const { data } = await STOCKS.get(`available?search=${stockName}`);
      return data?.stocks ? setStocksAvailable(data.stocks) : null;
    };
    fetchStock();
  }, [stockName]);
}
