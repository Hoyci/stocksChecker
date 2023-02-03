import { useState } from 'react';
import { Container, OptionControl, SelectControl } from './styles';

export default function SelectInput({
  stockName,
  setStockName,
  stocksAvailable,
  handleAddStock,
}) {
  const [isOnFocus, setIsOnFocus] = useState(false);

  const handleOptionSetStockName = (event) => {
    setStockName(event.target.textContent);
    handleAddStock(event.target.textContent);
  };
  return (
    <Container>
      <input
        type="text"
        placeholder="Search stocks available"
        onChange={(event) => setStockName(event.target.value)}
        onFocus={() => setIsOnFocus(true)}
        // onBlur={() => setIsOnFocus(false)}
        value={stockName}
      />

      {isOnFocus && (
        <SelectControl length={stocksAvailable?.length}>
          {stocksAvailable.map((stock) => (
            <OptionControl onClick={handleOptionSetStockName} key={stock}>
              {stock}
            </OptionControl>
          ))}
        </SelectControl>
      )}
    </Container>
  );
}
