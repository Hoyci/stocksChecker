import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonNewStock = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  padding: 12px 24px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  transition: background 0.1s ease-in;

  margin-bottom: 26px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const BoxMessage = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 330px;

  img {
    margin-bottom: 32px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }
`;

export const CardsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;
