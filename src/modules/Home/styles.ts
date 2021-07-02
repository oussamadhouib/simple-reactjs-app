// Styled component import
import styled from "styled-components";

// Types

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;

  > div {
    width: 1080px;
    height: 580px;
    margin-top: -180px;
    background: #FFFFFF;
    box-shadow: 0px 4px 70px rgba(36, 34, 49, 0.05);
    border-radius: 10px;
  }
  h3 {
    margin: 25px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #32354B;
  }

  .line{
    border: 1px solid rgba(50, 52, 75, 0.05);
  }
  .menu{
      display: grid;
      grid-template-columns: 100px 1fr 1fr 200px;

      height: 30px;
      width: 100%;
      flex-direction: row;
      align-items: center;
      /* justify-content: space-evenly; */
      /* background-color: red; */
   }
   span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    /* identical to box height */
    text-align: center;

    color: #848693;
   }

   .users_list {
       display: flex;
       flex-direction:column;
       justify-content: center;
       align-items: center;
   }
`;
