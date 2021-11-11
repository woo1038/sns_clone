import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import AppLayout from "../componenets/AppLayout";
import { Button } from "antd";
import { loginAction } from "../reducers/user";

const Home = () => {

  return (
    <AppLayout>
      <div>Hello, Home</div>
      <Button>hello</Button>
    </AppLayout>
  );
};

Home.propTypes = {};

export default Home;
