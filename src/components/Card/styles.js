import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 330px;
  padding: 16px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  margin-top: 24px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    h1 {
      margin-right: 12px;
      font-size: 16px;
    }
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  button {
    background: transparent;
    border: none;
    margin-left: 8px;
  }
`;

export const CurrencyBox = styled.div`
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 3px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const StockVolatility = styled.div`
  color: ${({ theme }) => theme.colors.gray[200]};

  p {
    display: inline;
    &:first-child {
      font-size: 14px;
      margin-right: 6px;
    }
    &:not(:first-child) {
      color: ${({ theme, isPositive }) => {
        if (isPositive === 'equal') {
          return theme.colors.gray[200];
        }
        if (isPositive) {
          return theme.colors.volatility.green;
        }
        return theme.colors.volatility.red;
      }};
      font-weight: 400;
      font-size: 8px;
    }
  }
`;
