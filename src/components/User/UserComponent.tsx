import { FC } from "react";
import { Wrapper } from "./styles";
import { useHistory } from "react-router-dom";

type UserProps = {
  data?: any;
  index?: number;
};

const UserComponent: FC<UserProps> = ({ data, index }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <img src={data?.avatar} alt="profile" />
      <span>{data?.first_name}</span>
      <span>{data?.email}</span>
      <button onClick={() => history.push(`/user/${data.id}`)}>Vue</button>
    </Wrapper>
  );
};

export default UserComponent;
