import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .button-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 80px;
    background-color: #000;
    border-radius: 4px;
    color: #f4f4f5;
    text-align: center;
    text-decoration: none;
  }

  .button-change-state {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 90px;
    background-color: #3371FF;
    border-color: #3371FF;
    border-radius: 4px;
    color: #f4f4f5;
    text-align: center;
    margin-top: 20px;
  }
`
