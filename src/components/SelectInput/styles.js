import styled, { css } from 'styled-components';

export const Container = styled.div`
  input {
    margin-top: 16px;
    margin-bottom: 8px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    padding: 6px 12px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: #bcbcbc;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SelectControl = styled.div`
  width: 100%;
  height: 100%;
  max-height: 200px;
  padding: 4px 0;

  background: #fff;
  /* transition: all 0.3s ease-in; */
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  ${({ length }) =>
    length > 10 &&
    css`
      overflow: scroll;
      overflow-x: hidden;
    `}
`;

export const OptionControl = styled.p`
  width: 100%;
  padding: 0 12px;

  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.lighter};
  }
`;
