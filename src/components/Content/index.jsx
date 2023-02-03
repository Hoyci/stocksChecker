import { useEffect, useState } from 'react';
import { Line } from '../Line';
import {
  BoxMessage,
  Container,
  ButtonNewStock,
  CardsContainer,
} from './styles';

import BoxImage from '../../assets/images/box.svg';
import Card from '../Card';
import { STOCKS } from '../../api/stocks';
import NewStockModal from '../Modal/newStockModal';
// import { stocksMock } from './mock';

export default function Content({ storedValue, setStoredValue }) {
  const [stocksResponse, setStocksResponse] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStocks = async () => {
      setIsLoading(true);
      const { data } = await STOCKS.get(
        `quote/${storedValue?.join(
          '%2C'
        )}?range=1d&interval=1d&fundamental=true`
      );
      setStocksResponse(data.results);
      setIsLoading(false);
    };
    fetchStocks();
    const interval = setInterval(() => fetchStocks(), 300000);
    return () => {
      clearInterval(interval);
    };
  }, [storedValue]);
  // This need to be a generic hook to fetch others endpoints?
  // How i'll handle with the setIsLoading to close modal if this is a generic component?

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsLoading(true);
  };

  return (
    <>
      <NewStockModal
        isModalOpen={isModalOpen}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setModalIsOpen={setIsModalOpen}
        setStoredValue={setStoredValue}
      />
      <Container>
        <ButtonNewStock type="button" onClick={handleModalOpen}>
          New stock
        </ButtonNewStock>
        <Line />
        {storedValue?.length !== 0 ? (
          <CardsContainer>
            {stocksResponse?.map(
              ({
                symbol,
                longName,
                regularMarketPrice,
                regularMarketChange,
                regularMarketChangePercent,
              }) => (
                <Card
                  key={symbol}
                  symbol={symbol}
                  longName={longName}
                  regularMarketPrice={regularMarketPrice}
                  regularMarketChange={regularMarketChange}
                  regularMarketChangePercent={regularMarketChangePercent}
                  setStoredValue={setStoredValue}
                />
              )
            )}
          </CardsContainer>
        ) : (
          <BoxMessage>
            <img src={BoxImage} alt="Box with a coin" />
            <p>You still don&apos;t have any stock registered!</p>
            <p>
              Click on the <span>”New stock”</span> button above to register
              your first one!
            </p>
          </BoxMessage>
        )}
      </Container>
    </>
  );
}
