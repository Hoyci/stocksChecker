import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.gray.overlay};
  backdrop-filter: blur(5px);
`;

export const Container = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.3s ease-in;

  border-radius: 4px;

  h1 {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  margin-top: 16px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  padding: 6px 12px;

  &::placeholder {
    color: #bcbcbc;
  }

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 46px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & button:nth-child(1) {
    margin-right: 12px;
  }
`;
