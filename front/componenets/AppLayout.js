import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Menu, Row, Col } from "antd";
import Link from "next/link";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const AppLayout = ({ children }) => {
  const { login } = useSelector((state) => state.user);
  console.log(login);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>메인화면</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/porfile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {login ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          <div>{children}</div>
        </Col>
        <Col xs={24} md={6}>
          world
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
