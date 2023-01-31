import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 32px;

  img {
    margin-bottom: 32px;
  }
`;

export const InputSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 150px;

  input {
    width: 100%;
    max-width: 500px;
    height: 50px;
    padding: 0 16px;

    border: none;
    border-radius: 25px;

    outline: none;

    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  }
`;
