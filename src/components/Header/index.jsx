import { useState } from 'react';

import { Container, InputSearchContainer } from './styles';
import logo from '../../assets/images/logo.svg';
// import useDebounce from '../../hooks/useDebounce';

export default function Header() {
  // TODO: create a way to searh by stock without recall the api because the application already has the necessary information
  const [searchStock, setSearchStock] = useState('');
  // const debouncedSearchTerm = useDebounce(searchStock, 500);

  const handleSearchStock = (event) => {
    setSearchStock(event.target.value);
  };

  // console.log(debouncedSearchTerm);

  return (
    <Container>
      <img src={logo} alt="Stocks checker" />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Search stocks"
          onChange={handleSearchStock}
        />
      </InputSearchContainer>
    </Container>
  );
}
