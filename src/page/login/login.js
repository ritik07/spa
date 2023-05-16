import React, { useEffect } from "react";
import SignupLogin from "../../component/login/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <SignupLogin />
    </div>
  );
};

export default Login;
