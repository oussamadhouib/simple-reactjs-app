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
  width: 1068px;
  height: 533px;
  background: #FFFFFF;
  box-shadow: 0px 4px 70px rgba(36, 34, 49, 0.05);
  border-radius: 10px;
  position: relative;
}

.thumbel_container{
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 30px;
}

img {
  width: 120px;
  height: 120px;
  border-radius: 60px;
}

.name {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  /* identical to box height */

  color: #000000;
}
.email {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  /* identical to box height */

  color: rgba(50, 52, 75, 0.6);
}

.table_info {
  display: grid;
  grid-template-columns: 2fr 4fr;
  padding: 45px;
  height: 200px;
}
.field {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  /* identical to box height */

  color: rgba(50, 53, 75, 0.6);
}

.value {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  /* identical to box height */

  color: #32354B;
}

button {
  position: absolute;
  width: 86px;
  height: 41px;
  right: 25px;
  top: 25px;
  background: #4053FF;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
}
`;
