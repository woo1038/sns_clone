import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.user);

  const aa = () => {
    dispatch(loginAction({ id: 1, name: 1 }));
  };

  return <Button onClick={aa}>Hello, LoginForm</Button>;
};

LoginForm.propTypes = {};

export default LoginForm;
