// Libraries Imports
import React, { FC, useState } from "react";

// Local Imports
import { Wrapper } from "./styles";

// Common Imports
import { Input } from "../../commons";

// Components Imports

// API Imports

// import { handleLogin } from "../../api/api";

// Other Imports

// Types
type CredentialType = {
  email: string;
  password: string;
};

const Login: FC = () => {
  // Local variables

  // States
  const [credentials, setCredentials] = useState<CredentialType>({
    email: "",
    password: "",
  });

  // Queries & Mutaions

  // Functions
  const handleCredentials = (
    field: "email" | "password",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials({ ...credentials, [field]: e.target.value });
  };

  // Local Data

  return (
    <Wrapper>
      <div className="container">
        <div className="sign_log">
          <button className="log_button">Login</button>
          <button className="sign_button">Sign Up</button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //   handleLogin();
          }}
        >
          <Input
            name="Email"
            id="email"
            type="email"
            value={credentials.email}
            onChange={(e) => handleCredentials("email", e)}
            //   adormentLeft={<User2 />}
            required
          />
          <Input
            name="Password"
            id="pwd"
            type="password"
            value={credentials.password}
            onChange={(e) => handleCredentials("password", e)}
            //   adormentLeft={<Unlock />}
          />
          <button> LOGIN </button>
          {/* <Button color="primary" type="submit" radius={10} fullWidth>
          Login
        </Button> */}
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
