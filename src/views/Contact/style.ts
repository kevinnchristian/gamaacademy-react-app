import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card {
      background-color: #AEDFF2;
      border-radius: 4px;
      padding: 24px;

      form {
        display: grid;

        input {
          margin: 6px 0;
        }
      }
    }
  }

  .button-link {
    height: 16px;
    width: 50px;
    background-color: #000;
    border-radius: 4px;
    color: #f4f4f5;
    text-align: center;
    text-decoration: none;
    padding: 6px 12px;
    margin-top: 20px;
  }
`