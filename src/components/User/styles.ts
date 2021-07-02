// Styled component import
import styled from "styled-components";

// Types

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr 1fr 200px;
    border-bottom: 1px solid rgba(50, 52, 75, 0.05);
    height: 60px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        border-radius: 25px;
        margin-left: 80px;
    }
    button {
        width: 88px;
        height: 41px;
        left: 1141px;
        top: 210px;
        background: #4053FF;
        border-radius: 4px;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
        margin-left: 55px;
    }
`;
