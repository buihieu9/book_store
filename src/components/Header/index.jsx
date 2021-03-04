import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Modal } from "antd";
import { Link } from "react-router-dom";
import DrawerHeader from "./DrawerHeader";
import { Header } from "antd/lib/layout/layout";
import LoginForm from "../LoginForm";
import InputSearch from "../Search/InputSearch";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
Navbar.propTypes = {};

function Navbar(props) {
  const [user, setUser] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSearhMb, setShowSearhMb] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleShowSearchMb = () => {
    setShowSearhMb(!showSearhMb);
  };

  const [headeSticky,setHeadeSticky] = useState(false)

  window.onscroll =() => {
    if(window.scrollY > 200) {
      setHeadeSticky(true)
      return
    }
    setHeadeSticky(false)
  }

  return (
    <header className="header">
      <Header
        style={{
          background: "white",
          padding: "0 20px",
          height: "80px",
          lineHeight: "80px",
          position: headeSticky && "fixed",
          width: headeSticky && "100%",
          zIndex: 9999,
        }}
      >
        {showSearhMb ? (
          <Row>
            <Col
              span={2}
              style={{ paddingTop: "5px" }}
              onClick={handleShowSearchMb}
            >
              <ArrowLeftOutlined
                style={{ fontSize: "20px", cursor: "pointer" }}
              />
            </Col>
            <Col span={22}>
              <InputSearch />
            </Col>
          </Row>
        ) : (
          <Row justify="space-between" align="top">
            <Col
              style={{ paddingTop: "5px" }}
              xs={{ span: 4 }}
              md={{ span: 0 }}
              onClick={handleShowSearchMb}
            >
              <SearchOutlined style={{ fontSize: "20px" }} />
            </Col>
            <Col>
              <Link to="/" className="header__logo">
                <img
                  src="https://res.cloudinary.com/dofqucuyy/image/upload/v1585755124/Books/logo_gtuxyy.svg"
                  alt="logo"
                />
              </Link>
            </Col>
            <Col xs={{ span: 0 }} md={{ span: 14 }}>
              <InputSearch />
            </Col>
            {user ? (
              <Col>
                <DrawerHeader />
              </Col>
            ) : (
              <Col>
                <Button
                  style={{
                    backgroundColor: "rgb(0 158 127)",
                    color: "white",
                    width: "10rem",
                  }}
                  block
                  shape="round"
                  size="large"
                  onClick={showModal}
                >
                  {" "}
                  Sigin
                </Button>
              </Col>
            )}
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <LoginForm />
            </Modal>
          </Row>
        )}
      </Header>
    </header>
  );
}

export default Navbar;
