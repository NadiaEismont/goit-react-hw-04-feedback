import styled from '@emotion/styled';

export const ChangeColor = styled.div`
  list-style: none;
  display: flex;
  margin-left: 20px;
  padding: 20;
`;

export const MainButton = styled.button`
  width: 100px;
  height: 40 px;
  background: none;
  margin-right: 20px;

  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #777777;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  :hover {
    background-color: #ffffff;
    color: black;
  }
  :not(:last-child) {
    margin-right: 20px;
  }
`;
