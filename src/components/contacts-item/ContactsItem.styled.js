import styled from 'styled-components';

export const ContactsItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  & span {
    font-size: 18px;
    color: #504077;
  }

  & .name {
    font-style: italic;
    font-weight: 500;
  }

  & button {
    width: 150px;
    height: 30px;

    font-size: 15px;
    color: #8293e3;

    border: 1px solid #8293e3;
    border-radius: 5px;
    background-color: white;
  }

  & button:hover {
    color: white;
    border: 1px solid transparent;
    background-color: #8293e3;
  }
`;
