// Styled component import
import styled from "styled-components";

// Types

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
 
  justify-content: center;
  align-items: center;
  .container {
    width: 500px;
    height: 311px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 4px 70px rgba(36, 34, 49, 0.1);
    border-radius: 10px;
  }

  .sign_button {
    width: 50%;
    height: 100%;
    background: #F1F1F1;
    border-radius: 4px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    border:0;
    /* identical to box height */
    text-align: center;

    color: rgba(50, 53, 75, 0.6);
  }

  .log_button {
    width: 50%;
    height: 80%;
    background: #FFFFFF;
    border-radius: 4px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    border:0;
    font-size: 11px;
    line-height: 16px;

    /* identical to box height */

    color: #32354B;

  }
  .sign_log {
    width: 218px;
    height: 40px;
    background: #F1F1F1;
    border-radius: 4px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    }

  > svg {
    width: 250px;
    height: 25px;
    margin-bottom: 80px;
  }
  form {
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 25px;
    width: min-content;
  }
  .input-container {
    height: 45px;
    width: 400px;
   
  }
  button {
    height: 41px;
    width: 98px;
    margin: auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    text-align: center;

    color: #FFFFFF;
    background: #4053FF;
    border-radius: 4px;
    .button__label {
      font-weight: 600;
      font-size: 17px;
      line-height: 20px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary.contrast};
    }
  }

  @media only screen and (max-width: 450px) {
    > svg {
      width: 180px;
      margin-bottom: 50px;
    }
    form > div {
      min-width: 80vw;
    }
  }
`;
