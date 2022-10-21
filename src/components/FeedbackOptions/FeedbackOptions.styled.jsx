import styled from '@emotion/styled';

export const ChangeColor = styled.div`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const MainButton = styled.button`
  cursor: pointer;
  background: none;
  border-radius: 6px;
  margin-right: 20px;
  :hover {
    background-color: blue;
    color: white;
  }
  :not(:last-child) {
    margin-right: 20px;
  }
`;
