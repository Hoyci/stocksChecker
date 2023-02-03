import { Container, CurrencyBox, StockVolatility } from './styles';

import trash from '../../assets/images/trash.svg';
import truncate from '../../utils/truncate';

export default function Card({
  symbol,
  longName,
  regularMarketPrice,
  regularMarketChange,
  regularMarketChangePercent,
  setStoredValue,
}) {
  const volatilityIsPositive =
    regularMarketChange === 0 ? 'equal' : regularMarketChange > 0;

  const handleRemoveStock = (event) => {
    setStoredValue((oldValue) =>
      oldValue.filter(
        (item) => item !== event.target.parentNode.getAttribute('value')
      )
    );
  };
  // How can I remove a stock and don't recall the endpoint? Because the application already has the necessary information
  // storedValue update every time that I set a new stock. So, if I want to only run this effect when add a new stock
  // This need to be inside the
  return (
    <Container>
      <div>
        <header>
          <h1>{symbol}</h1>
          <CurrencyBox>BRL</CurrencyBox>
        </header>
        <h2>{truncate(longName, 30)}</h2>
        <StockVolatility isPositive={volatilityIsPositive}>
          <p>{Number(regularMarketPrice).toFixed(2)}</p>
          <p>
            {regularMarketChange > 0
              ? `+${regularMarketChange.toFixed(2)}`
              : regularMarketChange.toFixed(2)}{' '}
            &#40;
            {regularMarketChangePercent.toFixed(2)}%&#41;
          </p>
        </StockVolatility>
      </div>
      <button value={symbol} type="button" onClick={handleRemoveStock}>
        <img src={trash} alt="Delete stock" />
      </button>
    </Container>
  );
}
