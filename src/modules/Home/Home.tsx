import { useState, useEffect } from "react";
import UserComponent from "../../components/User/UserComponent";
import { Wrapper } from "./styles";
import axios from "axios";
import Navbar from "../../commons/Navbar/Navbar";

function Home() {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(function (response) {
        // handle success
        setUsers(response.data.data);
      })
      .catch(function (error) {
        //   console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [users]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <div>
          <h3> Users List</h3>
          <hr className="line"></hr>
          <div className="menu">
            <span></span>
            <span>User Fullname</span>
            <span>Email</span>
            <span>Actions</span>
          </div>
          <hr className="line"></hr>
          <div className="users_list">
            {users &&
              users.map((user: any, index: number) => {
                return <UserComponent data={user} key={index} />;
              })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
