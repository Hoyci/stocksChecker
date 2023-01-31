import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px 24px;
  border: none;
  background: ${({ main }) =>
    main ? ({ theme }) => theme.colors.primary.main : '#fff'};

  color: ${({ main }) =>
    main ? '#fff' : ({ theme }) => theme.colors.gray.light};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  &:hover {
    background: ${({ main }) =>
      main
        ? ({ theme }) => theme.colors.primary.dark
        : ({ theme }) => theme.colors.primary.lighter};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;
