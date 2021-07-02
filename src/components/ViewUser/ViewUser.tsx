import { FC, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { useParams } from "react-router-dom";
import axios from "axios";

type UserProps = {
  data?: any;
  index?: number;
  onSelect?: (id: string) => void;
};

const ViewUser: FC<UserProps> = ({ data, index, onSelect }) => {
  const [user, setUser] = useState<any>();
  const { id } = useParams<{ id: string }>();

  // https://reqres.in/api/users/2

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then(function (response) {
        setUser(response.data.data);
      })
      .catch(function (error) {
        //   console.log(error);
      })
      .then(function () {
        // always executed
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div>
        <button>Edit</button>
        <div className="thumbel_container">
          <img src={user?.avatar} alt="av" />
          <h1 className="name">{user?.first_name}</h1>
          <span className="email">{user?.email}</span>
        </div>
        <div className="table_info">
          <span className="field">Name</span>
          <span className="value">{user?.first_name}</span>
          <span className="field">Email</span>
          <span className="value"> {user?.email}</span>
          <span className="field">Bio</span>
          <span className="value">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
            aenean proin semper duis tortor. Risus morbi cursus quisque massa
            elit. Scelerisque sit enim at lorem. Odio habitant eget sit id
            scelerisque.
          </span>
        </div>
      </div>
      {/* <img src={data?.avatar} alt="profile" />
      <span>{data?.first_name}</span>
      <span>{data?.email}</span>
      <button>Vue</button> */}
    </Wrapper>
  );
};

export default ViewUser;
