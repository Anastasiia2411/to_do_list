import styled from "styled-components";

export const ListElement = styled.li`
  font-size: 24px;
  line-height: 35px;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #FF506F;
  &>div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  };
  &>p{
    word-wrap: anywhere;
    max-width: 1000px;
    flex-wrap: wrap;
  }
`;

export const ListElementButton = styled.button`
  padding: 10px 18px;
  border-radius: 20px;
  border: 1px solid #FF506F;
  width: 150px;
  height: 50px;
  //max-width: 200px;
  font-size: 15px;
  line-height: 25px;
  color: black;
  background-color: #FF506F;
  transition: 0.7s;
 margin-left: 10px;
  &:hover {
    transition: 0.7s;
    background-color: #242424;
    color: white;
  }
`;


