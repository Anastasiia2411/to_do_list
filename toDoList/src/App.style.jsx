import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    min-height: 100vh;
  }
  
  

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  overflow: hidden;
`;

export const Input = styled.input`
  height: 50px;
  width: 700px;
  border: 1px solid #FF506F;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 20px;
  font-size: 24px;
  line-height: 35px;
  transition: 0.7s;

  &:focus {
    transition: 0.7s;
    border: 1px solid #FF506F;
    box-shadow: 3px 2px 3px 3px #FF506F;
    outline: none;
  }

  &:active {
    transition: 0.7s;
    border: 1px solid #FF506F;
    box-shadow: 3px 2px 3px 3px #FF506F;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  margin: 40px auto;
  flex-direction: column;
  max-width: 700px;
`;

export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 20px;
  border: 1px solid #FF506F;
  width: 200px;
  max-width: 200px;
  font-size: 20px;
  line-height: 25px;
  background-color: #242424;
  margin: 0 auto;
  transition: 0.7s;

  &:hover {
    transition: 0.7s;
    box-shadow: 3px 2px 3px 3px #FF506F;
  }
`;

