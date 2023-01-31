import { Container, CurrencyBox, StockVolatility } from './styles';

import trash from '../../assets/images/trash.svg';
import truncate from '../../utils/truncate';

export default function Card({
  symbol,
  longName,
  regularMarketPrice,
  regularMarketChange,
  regularMarketChangePercent,
  removeStock,
}) {
  const volatilityIsPositive =
    regularMarketChange === 0 ? 'equal' : regularMarketChange > 0;
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
      <button value={symbol} type="button" onClick={removeStock}>
        <img src={trash} alt="Delete stock" />
      </button>
    </Container>
  );
}
