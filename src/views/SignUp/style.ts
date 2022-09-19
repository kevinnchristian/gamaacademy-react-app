import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
  background: #8253e5;

  .card {
    background: #F9F9F9;
    width: 300px;
    border-radius: 8px;
    padding: 24px;

    h5 {
      color: #8c52e5;
      font-size: 1.4em;
      text-align: center;
      margin-bottom: 10px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        width: 100%;
        border-radius: 4px;
        padding: 6px;
        margin: 5px 0;
      }

      input[type="text"], input[type="email"], input[type="password"] {
        border: 1px solid #c2c9d6;
        
        &:focus {
          border: 2px solid #68DE5A;
          outline: none;
        }
      }

      input[type="submit"] {
        width: 150px;
        background: #68DE5A;
        border: none;
        font-weight: bold;
        margin-top: 15px;
        transition: 0.6s;

        &:hover {
          color: #F9F9F9;
          background: #8c52e5;
          cursor: pointer;
        }
      }
    }
  }
`