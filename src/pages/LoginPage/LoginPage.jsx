import React from "react";
import Input from "../../components/Input/Input";

function LoginPage() {
  return (
    <>
      <div>
        <Input
          label="Username"
          placeholder="Email or phone"
          id="username"
          name="username"
          type="text"
        />
      </div>
    </>
  );
}

export default LoginPage;
