import { FC } from "react";
import styled from "styled-components";

const Navbar: FC = () => {
  return (
    <Wrapper>
      <h1 className="logo">Home</h1>
      <button className="logout"> Logout</button>
    </Wrapper>
  );
};

export default Navbar;

export const Wrapper = styled.div`
  width: calc(100% - 60px);
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 70px rgba(36, 34, 49, 0.05);
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  .logo {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    /* identical to box height */
    text-align: center;

    color: #32354b;
  }
  .logout {
    width: 112px;
    height: 41px;
    left: 1309px;
    top: 10px;
    background: #e5e5e5;
    border-radius: 4px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;

    /* identical to box height */
    text-align: center;

    color: #32354b;
  }
`;
