import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .button-link {
    height: 16px;
    width: 50px;
    background-color: #000;
    border-radius: 4px;
    color: #f4f4f5;
    text-align: center;
    text-decoration: none;
    padding: 6px 12px;
  }

  .button-change-state {
    background-color: #3371FF;
    border-color: #3371FF;
    border-radius: 4px;
    color: #f4f4f5;
    text-align: center;
    padding: 6px 12px;
    margin-top: 20px;
  }
`
