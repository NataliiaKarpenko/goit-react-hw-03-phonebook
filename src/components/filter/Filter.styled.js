import styled from 'styled-components';

export const FilterStyled = styled.label`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  font-size: 20px;
  font-weight: 500;
  color: #5847ad;

  & input {
    width: 350px;
    height: 40px;
    padding-left: 10px;

    border: 2px solid #8293e3;
    border-radius: 10px;

    font-size: 20px;
    color: #5847ad;
  }

  & input::placeholder {
    font-size: 15px;

    color: #5847ad;
    opacity: 0.8;
  }
`;
