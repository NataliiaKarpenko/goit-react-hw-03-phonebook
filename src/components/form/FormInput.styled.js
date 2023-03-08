import styled from 'styled-components';

export const FormInputStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  & button {
    width: 200px;
    height: 40px;

    font-size: 20px;
    color: white;

    border: 2px solid transparent;
    border-radius: 10px;
    background-color: #8293e3;
  }

  & button:hover {
    color: #8293e3;
    border: 2px solid #8293e3;
    background-color: white;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  font-size: 20px;
  font-weight: 500;
  color: #5847ad;

  &:nth-child(1) {
    margin-bottom: 25px;
  }

  &:nth-child(2) {
    margin-bottom: 45px;
  }

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
