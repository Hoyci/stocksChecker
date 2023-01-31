import styled from 'styled-components';

export const Line = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;
