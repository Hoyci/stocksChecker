import { useState, useEffect } from 'react';

import { useDebounce, useCheckStocksAvailability } from '../../hooks';

import { ButtonContainer, Input } from './styles';
import { Modal } from './index';
import { Line } from '../Line';
import { Button } from '../Button';
import SelectInput from '../SelectInput';

export default function NewStockModal({
  isModalOpen,
  setModalIsOpen,
  setStoredValue,
  setIsLoading,
  isLoading,
}) {
  const [stockName, setStockName] = useState('');
  const stocksAvailable = useCheckStocksAvailability(stockName);
  // const debouncedStockName = useDebounce(stockName, 200);

  const handleAddStock = (value) => {
    setStoredValue((oldStoredValue) => {
      let response;
      if (oldStoredValue.includes(value.toUpperCase())) {
        setModalIsOpen(false);
        response = oldStoredValue;
      }
      setStockName('');
      response = [...oldStoredValue, value.toUpperCase()];
      return response;
    });
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isModalOpen && !isLoading) {
      handleCloseModal();
    }
  }, [isLoading]);

  return (
    <Modal isModalOpen={isModalOpen} setModalIsOpen={setModalIsOpen}>
      <h1>Add new stock</h1>
      <Line />
      <SelectInput
        stockName={stockName}
        setStockName={setStockName}
        stocksAvailable={stocksAvailable}
        handleAddStock={handleAddStock}
      />
      {/* <Input
        type="text"
        placeholder="Search stocks available"
        onChange={(event) => setStockName(event.target.value)}
        list="stockList"
      />
      {stocksAvailable.length > 0 && (
        <datalist id="stockList">
          {stocksAvailable.slice(0, 10).map((stock) => (
            <option key={stock}>{stock}</option>
          ))}
        </datalist>
      )} */}

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
    </Modal>
  );
}
