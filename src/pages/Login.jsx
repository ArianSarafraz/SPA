import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // Its return is a function which is saved inside a constant
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/app/dashboard", {
      replace: true,
      state: "This is a dummy text",
    });
  };
  return (
    <div>
      <h1>Login</h1>
      {isAuth && <Navigate to="/app/dashboard" replace={true} />}
      <form onSubmit={handleSubmit}>
        <button>Login</button>
      </form>
      <button onClick={() => setIsAuth(!isAuth)}>Toggle is Auth</button>
    </div>
  );
}

export default Login;
