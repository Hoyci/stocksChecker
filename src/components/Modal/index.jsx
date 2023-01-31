import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Line } from '../Line';
import { Button } from '../Button';
import { Overlay, Container, ButtonContainer } from './styles';

import useDebounce from '../../hooks/useDebounce';
import useCloseModalByEscape from '../../hooks/useCloseModalByEscape';
import useCheckStocksAvailability from '../../hooks/useCheckStocksAvailability';

export function Modal({
  modalIsOpen,
  setModalIsOpen,
  setStoredValue,
  setIsLoading,
  isLoading,
}) {
  // TODO: transform this is a generic component because I will use this to show a modal asking if I want to delete the stock
  const [stockName, setStockName] = useState('');
  const debouncedStockName = useDebounce(stockName, 200);
  const [stocksAvailable, setStocksAvailable] = useState([]);

  useCheckStocksAvailability(debouncedStockName, setStocksAvailable);
  useCloseModalByEscape(setModalIsOpen, setStocksAvailable);

  const handleStockName = (event) => setStockName(event.target.value);

  const handleAddStock = () => {
    setStoredValue((oldStoredValue) =>
      oldStoredValue.includes(debouncedStockName)
        ? oldStoredValue
        : [...oldStoredValue, debouncedStockName]
    );
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setStocksAvailable([]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (modalIsOpen && !isLoading) {
      handleCloseModal();
    }
  }, [isLoading]);

  if (!modalIsOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>Add new stock</h1>
        <Line />
        <input
          type="text"
          placeholder="Search stocks available"
          onChange={handleStockName}
          list="stockList"
        />
        {stocksAvailable.length > 0 && (
          <datalist id="stockList">
            {stocksAvailable.slice(0, 10).map((stock) => (
              <option key={stock}>{stock}</option>
            ))}
          </datalist>
        )}

        <ButtonContainer>
          <Button type="button" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            type="submit"
            main
            disabled={!stocksAvailable}
            onClick={handleAddStock}
          >
            Add
          </Button>
        </ButtonContainer>
      </Container>
    </Overlay>,
    document.getElementById('modal')
  );
}
